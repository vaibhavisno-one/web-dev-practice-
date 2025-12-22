// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import app from './app.js'

import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'   //takes info from .env
})

connectDB() //call other fucntion and then initialize it here
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port ${process.env.PORT}`); // Uses that connectDB() function to actually open the door and start the app if it unlocks
    })
})
.catch((err)=>{
    console.log('MONGODB CONNECTION FAILED  ' , err);
    
})



/*(First approach)
import express from "express"
const app = express()
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error) =>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.port,()=>{
            console.log(`app is listning on port ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.log("ERROR", error)
        throw error
    }
})()
*/