# Sunduk Backend
Welcome to Sunduk, the modern solution for communal savings and financial empowerment!

## Introduction
Sunduk is a digital platform that allows users to join or create savings groups, known as 'sunduks,' to pool funds, take turns receiving lump sum payouts, and support each other's financial goals. This README provides an overview of the backend codebase for Sunduk.

## Getting Started
To get started with the Sunduk backend, follow these steps:

- Clone this repository to your local machine by excuting the following command:
```bash
git clone git@github.com:Emmanuel-Melon/boxy-backend.git
```
- Navigate to the project directory.
- Install dependencies by running npm install or yarn install.
- Set up environment variables by creating a .env file and adding the required variables (see .env.example for reference).
- Start the development server by running npm run dev or yarn dev.

## Overview of App
### RESTful API: 
Provides endpoints for managing users, sunduks, transactions, loans, and other functionalities.
### Authentication: 
Supports secure login and user management using JWT tokens.
### Database
Interacts with a PostgreSQL database to store user data, sunduk information, transaction records, and loan requests.
Security Features: Implements security features from Pangea, including Secure Audit Log, Redact, Embargo, Vault, AuthN, File Intel, IP Intel, Domain Intel, URL Intel, File Scan, and Secure Share.

## Tech Stack
- Node.js: JavaScript runtime for building backend applications.
- Express.js: Web framework for building RESTful APIs.
- PostgreSQL: Relational database management system.
- Pangea: Security platform for implementing security features.

## Contributing
Contributions to the Sunduk backend are welcome! Please follow the contribution guidelines for more information.

License
This project is licensed under the MIT License.
