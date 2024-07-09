import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import dotenv from 'dotenv';
// require("dotenv").config();
dotenv.config()

export const verifyToken = (req, res, next) => {

  // const JWT_SECRET = '823a7dd9c2af7b0e78742733953085234ac806ed28b36147dfa69fa91ceffaeaf9e8875b9e7c3fae3e1aaabd6079aa4ce1bcdf7850e2e5ee5cf330bdb9509f00'

  const secretKey = process.env.JWT_SECRET

  const token = req.cookies.access_token;

  console.log("this is it the token -->", token);
  
  if (!token) {

    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, `${secretKey}`, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};


// const crypto = require('crypto');

// const generateRandomSecret = () => {
//   return crypto.randomBytes(32).toString('hex');
// };

// const newSecret = generateRandomSecret();
// console.log(newSecret);
