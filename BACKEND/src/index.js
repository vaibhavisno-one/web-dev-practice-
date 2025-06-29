// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'

import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port ${process.env.PORT}`);
        
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