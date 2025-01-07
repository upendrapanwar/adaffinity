import 'module-alias/register';
import dotenv from 'dotenv';
import app from './app';
import express, { Express } from "express"
import mongoose from "mongoose"

import path from "path";

import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
dotenv.config();
//const app: Express = express()

const ENV: string | number = process.env.APP_ENV || 'local';

const PORT: string | number = process.env.PORT || 7700



if (!process.env.CONNECTION_STRING) {
  throw new Error('CONNECTION_STRING environment variable is not defined');
}

const uri: string = process.env.CONNECTION_STRING;

mongoose
  .connect(uri)
  .then(() =>
  {
    console.log('Connected to MongoDB');
  }
  )
  .catch(error => {
    throw error
  })


//global.__basedir = __dirname;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully.');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

  