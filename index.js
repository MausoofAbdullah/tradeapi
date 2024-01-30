const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app=express()
const db= require('./connection')


const tradeRoute=require('./routes/tradeRoute.js')

dotenv.config();
app.use(express.json());


db.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log('Connected to MongoDB');
        console.log(`Server listening on port ${process.env.PORT}`);
      });
}).catch((error)=>{
    console.log(error)
})


app.use('/',tradeRoute)
 