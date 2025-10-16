import { asyncHandler } from "../utils/asyncHandler";


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

    console.log('email', email);
    
    
})


export {registerUser}