# THE LOTUS TEAM

The lotus team is a project to showcase the implementation of authentication and authorization of users using jsonwebtoken, localStorage, cookiePaser, etc.

# Table of Contents

- Project Description
- Features
- Installation
- Usage
- API Documentation
- Authentication and Authorization
- Contributing
- License

# Project Description

The lotus team is a fictional team that showcases all their portfolio in their home page. They allow users to register, then login. This is where the authorization and authentication features where implemented. The Lotus Team have a members page where only registered users can access. It does this by verifying the token of the current user, if the token is valid then they can access the route. For users to make calls to the Team Members route, tokens are stored in the local storage, in which they retrieve from the local storage and set them to the authorization field in the Headers property before making a call to the said Team Members route.

# Features

- Sign Up
- Sign In
- Authentication of tokens
- Storing of token in the client side local storage
- Implementation of cookieParser

# Technologies Used

- Express
- Nodejs
- MongoDB
- JsonWebToken
- Cookie-parser
- Mongoose
- Helmet
- Bcrypt

# Installation

Provide instructions on how to install and set up the project on a local development environment. Include any necessary prerequisites, dependencies, or configuration steps.

# Usage
```Download the zip-code of this project
install all dependencies by running in the terminal```
```yarn install or npm install
create a .env file in the root folder, give values to mongodbUri and SECRET keys

then start the server by running
``` yarn run dev

Explain how to use the project and any important considerations or guidelines for running it. Include example code snippets or command line instructions if necessary.

# API Documentation
* Check my thunder-collection_local-storage-auth file

a link to my api documentation will be placed here.

# Authentication and Authorization

Here I will divide this section into 3: Sign-up, login and access protected route

## Sign-Up:

A user has to provide email and password to sign up, the details are passed to the server, the password is hashed with bcrypt and through mongoose the password and email are stored in the MongoDB database. They are checked prior storing if they exist, if so an error is thrown. While making sure the emal and password are validated in html and userSchema model.

## Login:

A user has to provide email and password to login, when the data gets to the server side, they are checked if they exist, if so, the password is compared with the one gottenn from database then jsonwebtoken is used to sign the user and a token is generated and then user is redirected to the home page while storing the token in the localStorage of the client side.

## Access Protected Route:

When a user tries to access a protected route, which is meant for only registered users who are logged in. In the case of this website, Team Members route, a call is made from the client side using fetch core node functions to call the server api. During this call, the token is retrieved from the localStorage and set to the authorization field of the Headers.

Now when it gets to this protected route, the request will pass through the authenticateToken middleware which which will verify if they token set in the headers is valid. If so then it gives it access, if not and Unauthorized error is throw and user is redirected to Home Page.
