require("rootpath")();
import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
//const package = require('./package.json');
const https = require('https');
const fs = require('fs');
const http = require('http');

const app: Express = express()

const ENV: string | number = process.env.APP_ENV || 'local';

const PORT: string | number = process.env.PORT || 7700

app.use(cors())

if (!process.env.CONNECTION_STRING) {
  throw new Error('CONNECTION_STRING environment variable is not defined');
}

const uri: string = process.env.CONNECTION_STRING;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

global.__basedir = __dirname;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//app.use("/admin", require("./app/controllers/admin.controller"));
app.use("/user", require("./app/controllers/creator.controller.ts"));
//app.use("/instructor", require("./app/controllers/instructor.controller"));
app.use(
  "/" + process.env.UPLOAD_DIR,
  express.static(__dirname + "/" + process.env.UPLOAD_DIR)
);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

  