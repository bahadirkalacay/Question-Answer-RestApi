const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index")
const connectDatabase=require("./helpers/database/connectDatabase")
const customErrorHandler  = require("./middlewares/errors/customErrorHandler")

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase(); 

const app = express(); 

app.use(express.json()) 

const PORT = process.env.PORT; 



app.use("/api",routers)

app.use(customErrorHandler) // hatalar

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} :  ${process.env.NODE_ENV}`);
});
