# Dating App with MERN Stack

A modern dating application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create profiles, match with others, and engage in real-time messaging.

## Objectives

The primary goals of this project are to:

* Develop a full-stack dating application using the MERN stack.
* Implement user authentication and authorization.
* Enable real-time messaging between users.
* Create a responsive and user-friendly interface.
* Deploy the application for public access.

## Technologies Used

* **Frontend**:

  * ![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=black) **React**: A JavaScript library for building user interfaces.
  * ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socketdotio\&logoColor=white) **Socket.IO**: For real-time bidirectional event-based communication.

* **Backend**:

  * ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white) **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  * ![Express](https://img.shields.io/badge/Express-000000?logo=express\&logoColor=white) **Express.js**: A minimal and flexible Node.js web application framework.
  * ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb\&logoColor=white) **MongoDB**: A NoSQL database for storing user data and messages.
  * ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose\&logoColor=white) **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

* **Authentication**:

  * ![JWT](https://img.shields.io/badge/JWT-000000?logo=json-web-tokens\&logoColor=white) **JSON Web Tokens (JWT)**: For secure user authentication.

* **Deployment**:

  * **Heroku**: Platform-as-a-Service (PaaS) used for deploying the application.
  * **MongoDB Atlas**: Cloud-hosted MongoDB service for database hosting.

## Features

* **User Profiles**: Users can create and edit their profiles with personal information and preferences.
* **Matching System**: Swipe functionality to like or pass on other users' profiles.
* **Real-Time Messaging**: Chat with matched users in real-time using Socket.IO.
* **Authentication**: Secure login and registration using JWT.
* **Responsive Design**: Mobile-friendly interface built with React.

## Applications

This application is ideal for:

* **Online Dating Platforms**: Connecting individuals with similar interests.
* **Social Networking Services**: Facilitating communication between users.
* **Event-Based Networking**: Allowing attendees to connect before and during events.

## Future Enhancements

To further enhance this project, consider implementing the following features:

* **Geolocation**: Match users based on proximity.
* **Video Chat**: Integrate video calling functionality.
* **Push Notifications**: Notify users of new messages or matches.
* **Admin Dashboard**: Monitor user activity and manage reports.
* **Payment Integration**: Offer premium features through subscription plans.

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SulemanMughal/Dating-App.git
   cd Dating-App
   ```

2. **Install frontend dependencies**:

   ```bash
   cd dating-app-frontend
   npm install
   ```

3. **Install backend dependencies**:

   ```bash
   cd ../dating-app-backend
   npm install
   ```

4. **Set up environment variables**:

   * Create a `.env` file in the `dating-app-backend` directory with the following content:

     ```
     JWT_SECRET=your_jwt_secret
     MONGO_URI=your_mongodb_connection_string
     ```
   * Replace `your_jwt_secret` with a secret key of your choice.
   * Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

5. **Run the backend server**:

   ```bash
   cd ../dating-app-backend
   npm start
   ```

6. **Run the frontend server**:

   ```bash
   cd ../dating-app-frontend
   npm start
   ```

7. **Access the application**:
   Open a browser and go to `http://localhost:3000/`.

## Contributing

Contributions are welcome! If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

