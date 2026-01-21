import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/uploadOnCloudinary.js";
import { useDeferredValue } from "react";


const registerUser = asyncHandler(async (req, res)=>{
    // get user detail from frontend
    // validation - not empty
    // check if user already exists: username , email
    // files availabilty - avatar and compulsary
    // upload them to cloudinary , avatar
    // create user object- create entry in db
    // remove pass and refresh token field from response
    // check for user creation 
    // return res


    const {fullname, username,email,password}=req.body
    
//validation
    if([fullname, username,email,password].some((field)=>
        field.trim() ==="")){
        throw new ApiError(400,"All fields are required")
    }

//user existense check
    const user = await User.findOne({
        $or:[{email},{username}]
    })
    if(user){
        throw new ApiError(409,"User already exists or email")
    }
})


const avatarLocalPath = req.file?.avatar[0]?.path;

const coverImageLocalPath = req.file?.coverImage[0]?.path;


if(!avatarLocalPath){
    throw new ApiError(400,"Avatar is required")
}

const avatar = await uploadOnCloudinary(avatrLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)

if(!avatar){
    throw new ApiError(400,"Avatar is required")
}


//create database entry for user

const user = await User.create({
    fullname,
    username:username.toLowerCase(),
    email,
    password,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    
})

if(!user){
    throw new ApiError(500,"Something went wrong while registering the user")
}



const loginUser =asyncHandler(async(req,res,next)=>{

    const {email,password} = req.body;

    if(!email||!password){
        throw new ApiError(400,"All fields are required")
    } 

    const user = await User.findOne({email}).select("+password");

    if(!user){
        throw new ApiError(401,"Invalid email ")
    }

    const isMatch =await user.isPasswordCorrect(password)

    if(!isMatch){
        throw new ApiError(401,"Invalid password");
        
    }

    res.status(200).json({
        success:true,
        message:"User logged in successfully",
    })

})

export  default {registerUser,loginUser}