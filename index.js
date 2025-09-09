import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import connectToDB from './config/connection.js';
const port = process.env.PORT;

app.get('/', (req,res) =>{
  res.send("Working Server");
})


app.listen(port,()=>{
  connectToDB()
  console.log(`Server is Running on PORT: ${port}`);
})