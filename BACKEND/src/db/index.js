import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async()=>{
    try{
       const connectionInstance = await mongoose.connect
       (`${process.env.MONGODB_URI}/${DB_NAME}`)

       console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("DB CONNECTION ERROR: ", error)
        process.exit(1)//node ye liberty deta hai
    }
}
export default connectDB
//🧠 Logic to connect to MongoDB	