# Emailing & Survey Platform

### Full-Stack Emailing and Survey Management Platform

A full-stack web application designed to provide individuals and organizations with tools for creating, distributing and reviewing surveys while supporting user authentication, email communication and payment processing.

---

## 🚀 Live Project

https://emailing-mz0f.onrender.com

---

## 📸 Project Preview

![Landing Page](public/LandingPage.JPG)

---

## ✨ Key Features

* 📧 Email-based communication
* 📋 Survey creation
* 📝 Survey review and management
* 📊 Dashboard
* 🔐 User authentication
* 🔑 Google OAuth authentication
* 👤 Session-based authentication
* 💳 Stripe payment integration
* 🔄 Stripe webhook processing
* 📬 Mailgun email delivery
* 🗄️ MongoDB data management
* 📱 Responsive design
* 🔌 REST API integration

---

## 📸 Screenshots

### Landing Page

![Landing Page](public/LandingPage.JPG)

### Dashboard

![Dashboard](public/Dashboard.JPG)

### Create Survey

![Create Survey](public/CreateSurvey.JPG)

### Survey Review

![Survey Review](public/SurveyReview.JPG)

### Received Survey

![Received Survey](public/RecievedSurvey.JPG)

### Stripe Payment

![Stripe Payment](public/StripePayment.JPG)

---

## 📱 Mobile Screenshots

### Mobile Landing Page

![Mobile Landing Page](public/MobilView-LandingPage.png)

### Mobile Authentication

![Mobile Authentication](public/MobileView-Authentication.png)

### Mobile Dashboard

![Mobile Dashboard](public/MobileView-Dashboard.png)

### Mobile Create Survey

![Mobile Create Survey](public/MobileView-CreateSurvey.png)

### Mobile Stripe Payment

![Mobile Stripe Payment](public/MobileView-StripPayment.png)

---

## 🛠️ Technology Stack

### Frontend

* React
* Next.js
* Redux
* React Hook Form

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Google OAuth
* Express Session

### Email Services

* Mailgun

### Payments

* Stripe
* Stripe Checkout
* Stripe Webhooks

### Deployment

* Vercel
* Render

---

## 🏗️ Application Architecture

The application uses a full-stack architecture consisting of a modern frontend, Node.js/Express backend, MongoDB database and external service integrations.

```text
User
 ↓
React / Next.js Frontend
 ↓
Express REST API
 ↓
Node.js Backend
 ↓
Mongoose
 ↓
MongoDB
```

External services are integrated into the backend where required:

```text
                 ┌── Google OAuth
                 │
Frontend → Backend ├── Mailgun
                 │
                 └── Stripe
                      ↓
                 Stripe Webhooks
```

---

## 🔄 Application Workflow

The general application workflow is:

```text
User
 ↓
Authentication
 ↓
Dashboard
 ↓
Create / Manage Survey
 ↓
Backend API
 ↓
MongoDB
 ↓
Email / Survey Processing
 ↓
Recipient
 ↓
Survey Review / Response
```

For payment-enabled functionality:

```text
User
 ↓
Stripe Checkout
 ↓
Stripe
 ↓
Webhook
 ↓
Backend
 ↓
Database Update
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/nels-frank/Emailing.git
```

Navigate into the project:

```bash
cd Emailing
```

Install dependencies:

```bash
npm install
```

If the project contains separate frontend and backend applications, install the dependencies within their respective directories according to the project structure.

---

## 🔐 Environment Variables

Create the appropriate `.env` configuration files required by the application.

Typical configuration may include:

```env
MONGODB_URI=
SESSION_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MAILGUN_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

The exact environment variables should match the application's configuration.

**Never commit API keys, passwords, OAuth secrets, Stripe secrets or other sensitive credentials to GitHub.**

---

## ▶️ Running the Application

Install the project dependencies and start the application using the commands defined in the project's `package.json`.

For a typical development environment:

```bash
npm run dev
```

If the application uses separate frontend and backend processes, start each service according to the project's configuration.

---

## ☁️ Deployment

The application uses modern cloud deployment services for production hosting.

### Frontend

**Vercel**

### Backend

**Render**

Production environment variables are configured through the respective hosting platforms.

---

## 🔗 Integrations

### Google OAuth

Google OAuth provides an alternative authentication method for users.

### Mailgun

Mailgun is used for email delivery and email-related functionality.

### Stripe

Stripe provides payment processing through Stripe Checkout.

Stripe webhooks allow the application to receive and process payment events from Stripe on the backend.

---

## 🧩 Challenges & Solutions

### Authentication Integration

Integrating Google OAuth with application-based authentication required proper handling of user sessions and authentication callbacks.

**Solution:**
Implemented Google OAuth alongside session-based authentication to provide secure user authentication.

### Email Service Integration

The application required a reliable external email delivery service.

**Solution:**
Integrated Mailgun into the backend to handle application email delivery.

### Payment Processing

Payment functionality required secure communication between the application and Stripe.

**Solution:**
Implemented Stripe Checkout and backend webhook processing to handle payment events.

### Webhook Processing

Payment events needed to be received and processed reliably by the backend.

**Solution:**
Implemented Stripe webhook handling and server-side event processing.

### Production Deployment

The application required separate frontend and backend deployment environments.

**Solution:**
Configured the application for cloud deployment using Vercel for the frontend and Render for backend services, with sensitive configuration supplied through environment variables.

### Responsive Design

The application needed to remain usable across desktop, tablet and mobile devices.

**Solution:**
Implemented responsive interfaces and layouts for different screen sizes.

---

## 🔒 Security

* Sensitive credentials are stored through environment variables.
* API keys and secrets are not committed to the repository.
* Authentication is handled through secure application mechanisms.
* Google OAuth credentials are kept server-side.
* Stripe secret keys are kept server-side.
* Stripe webhook secrets are used to validate webhook requests.
* Database credentials are not exposed in the frontend.
* Production secrets are configured through hosting environments.

---

## 📚 What I Learned

Building this project strengthened my practical experience with:

* React and Next.js
* Redux
* Node.js and Express
* MongoDB and Mongoose
* Google OAuth
* Session-based authentication
* REST API development
* Mailgun integration
* Stripe Checkout
* Stripe webhooks
* Environment configuration
* Full-stack application architecture
* Production deployment
* Frontend/backend debugging
* Responsive web development

---

## 🚀 Future Improvements

* Advanced survey analytics
* Expanded email campaign functionality
* Improved survey reporting
* Additional authentication options
* Enhanced user management
* Advanced payment and subscription features
* More comprehensive notification systems
* Improved administrative tools

---

## 📌 Project Status

**Production Deployment**

The application has been developed as a full-stack production project integrating authentication, email services, survey functionality and payment processing.

---

## 👨‍💻 Author

### Adzua Terhemen Frank

**Full-Stack Software Developer**

I build modern web applications and business systems that solve real-world problems.

**GitHub:**
https://github.com/nels-frank

**LinkedIn:**
https://www.linkedin.com/in/adzua-frank-523302324/

**Email:**
[frankadzua@gmail.com](mailto:frankadzua@gmail.com)

**Phone:**
+234 706 665 2626
+234 815 480 0458

---

## 📄 License

This project is presented as a professional portfolio project.
