const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app=express()
const db= require('./connection')


dotenv.config();
app.use(express.json());


db.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
      });
}).catch((error)=>{
    console.log(error)
})
// app.listen(process.env.PORT, () => {
//     console.log(`Server listening on port ${process.env.PORT}`);
//   });
 