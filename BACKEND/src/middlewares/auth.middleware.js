import User from "../models/user.model.js" 
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"



exports.verifyJWT = asyncHandler(async(req,res,next)=>{
    const token = req.cookies?.accessToken || request.header("Authorization")?.replace("Bearer ", "")

    try {
        if (!token){
            throw new ApiError(401, "Unauthorized")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
    
        const user = await User.findById(decodedToken._id).select("-password -refreshToken" )
    
        if(!user){
            throw new ApiError(401, "User not found")
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})