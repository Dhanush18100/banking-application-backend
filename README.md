# banking-application-backend

![License](https://img.shields.io/badge/license-ISC-green)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📝 Description

A robust and scalable backend solution for a modern banking application developed using the Express.js framework. This project provides a secure and high-performance web-based architecture designed to handle complex financial transactions, user account management, and persistent data storage through seamless database integration, ensuring data integrity and a responsive experience for fintech services.

## ✨ Features

- Users can create account
- Transfer money to other user
- Token blacklisting
- Email altert
  

## 🛠️ Tech Stack

- 🚀 Express.js
- 🟢 Node.js
- 🍃 MongoDB


## 📦 Key Dependencies

```
bcryptjs: ^3.0.3
cookie-parser: ^1.4.7
cors: ^2.8.6
dotenv: ^17.3.1
express: ^5.2.1
jsonwebtoken: ^9.0.3
mongoose: ^9.2.2
nodemailer: ^8.0.1
nodemon: ^3.1.14
```

## 🚀 Run Commands

- **test**: `npm run test`
- **dev**: `npm run dev`
- **start**: `npm run start`


## 📁 Project Structure

```
.
├── package.json
├── server.js
└── src
    ├── app.js
    ├── controllers
    │   ├── accountController.js
    │   ├── authControllers.js
    │   └── transactionController.js
    ├── db
    │   └── db.js
    ├── middleware
    │   └── authMiddleware.js
    ├── models
    │   ├── accountModel.js
    │   ├── blackListModel.js
    │   ├── ledgerModel.js
    │   ├── transactionModel.js
    │   └── userModel.js
    ├── routes
    │   ├── accountRoutes.js
    │   ├── authRoutes.js
    │   └── transactionRoutes.js
    └── services
        └── emailService.js
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Dhanush18100/banking-application-backend.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

---

