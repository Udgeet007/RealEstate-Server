import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import connectToDB from './config/connection.js';
const port = process.env.PORT;
import authRoute from './routes/auth.route.js';

app.get('/', (req,res) =>{
  res.send("Working Server");
})
app.use(express.json()); // this will allow json to the server 

app.use('/api/users',authRoute);
app.use((err,req,res,next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port,()=>{
  connectToDB()
  console.log(`Server is Running on PORT: ${port}`);
})