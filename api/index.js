const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const movieRouter = require('./routes/movies')
const listRouter = require('./routes/lists');

dotenv.config();




async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('database is connected suucefful');
    
  }
  main().catch(err => console.log(err));
 

app.use(express.json());
app.use("/api/auth/",authRouter);
app.use("/api/users/",userRouter);
app.use("/api/movies/",movieRouter);
app.use('/api/lists',listRouter);

app.listen(6000,()=>{
    console.log("backend server is running");
})