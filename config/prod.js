//prod.js - production keys here!!
module.exports = {
googleClientID: process.env.GOOGLE_CLIENT_ID,
googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
mongoURI: process.env.MONGO_URI,
expressKey: process.env.EXPRESS_KEY,
stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
stripeSecretKey: process.env.STRIPE_SECRET_KEY
};


//test db username and password:username:frankadzua, password: jfvSDfCGEz05JAmf
//mongodb+srv://frankadzua:<db_password>@emailing-prod-cluster.e5e1rry.mongodb.net/?retryWrites=true&w=majority&appName=Emailing-prod-Cluster
//connection string for test db: mongodb+srv://frankadzua:jfvSDfCGEz05JAmf@cluster0.tyut7ps.mongodb.net/emailingprod?retryWrites=true&w=majority&appName=Cluster0
