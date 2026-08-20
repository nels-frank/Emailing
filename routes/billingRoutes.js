const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {

  // Create Stripe Checkout Session
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],

        line_items: [
          {
            price_data: {
              currency: 'usd',

              product_data: {
                name: 'Email Credits',
                description: '5 Email Credits'
              },

              unit_amount: 500
            },

            quantity: 1
          }
        ],

        mode: 'payment',

        success_url:
          `${process.env.CLIENT_URL || 'http://localhost:3000'}/surveys`,

        cancel_url:
          `${process.env.CLIENT_URL || 'http://localhost:3000'}/surveys`,

        metadata: {
          userId: req.user.id,
          credits: '5'
        }
      });

      res.send({
        url: session.url
      });

    } catch (err) {
      console.error('Stripe Checkout Error:', err);

      res.status(500).send({
        error: 'Unable to create Stripe checkout session'
      });
    }
  });


  // Stripe Webhook
  app.post('/api/stripe/webhook', async (req, res) => {

    const signature = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        keys.stripeWebhookSecret
      );

    } catch (err) {
      console.error(
        'Stripe Webhook Signature Error:',
        err.message
      );

      return res.status(400).send(
        `Webhook Error: ${err.message}`
      );
    }


    try {

      if (event.type === 'checkout.session.completed') {

        const session = event.data.object;

        // Only credit fully paid sessions
        if (session.payment_status !== 'paid') {
          return res.json({ received: true });
        }

        const userId = session.metadata?.userId;
        const credits = Number(session.metadata?.credits);

        if (!userId || !credits) {
          console.error(
            'Stripe webhook missing userId or credits'
          );

          return res.json({ received: true });
        }


        /*
         * Atomically:
         * 1. Check that this Stripe session has not been processed.
         * 2. Add the credits.
         * 3. Record the Stripe session ID.
         *
         * This prevents Stripe retries from adding credits twice.
         */
        const user = await User.findOneAndUpdate(
          {
            _id: userId,
            processedStripeSessions: {
              $ne: session.id
            }
          },
          {
            $inc: {
              credits: credits
            },

            $addToSet: {
              processedStripeSessions: session.id
            }
          },
          {
            new: true
          }
        );


        if (!user) {

          // This can mean the payment was already processed
          // or the user does not exist.
          const existingUser = await User.findById(userId);

          if (!existingUser) {
            console.error(
              'Stripe webhook: User not found:',
              userId
            );
          } else {
            console.log(
              'Stripe webhook: Payment already processed:',
              session.id
            );
          }

          return res.json({ received: true });
        }


        console.log(
          `Stripe payment successful: ${session.id}`
        );

        console.log(
          `Added ${credits} credits to user: ${userId}`
        );
      }

      res.json({ received: true });

    } catch (err) {

      console.error(
        'Stripe Webhook Processing Error:',
        err
      );

      res.status(500).send(
        'Webhook processing failed'
      );
    }
  });
};
