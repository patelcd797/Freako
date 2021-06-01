const express = require('express') 
const PORT = 1224
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./Routes/user.tsx")
const app = express()
const db = 'mongodb+srv://patelcd797:Patelcd@797@cluster0.tcxn0.mongodb.net/data?retryWrites=true&w=majority'
mongoose
  .connect(
    db,
    {useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
  });

app.use('/api/user', userRoute)





app.listen(PORT, ()=>{
    console.log('server is listening');
})

