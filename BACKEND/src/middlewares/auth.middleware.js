import User from "../models/user.model.js" 



exports.protect = asynchandler(async(req,res,next)=>{
    try{

    }
    catch(error){
        throw new ApiError(401,error.message || "Invalid access token")
    }
})