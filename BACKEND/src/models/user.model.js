import mongoose, {Schema} from "mongoose";

const userSchema = new Schema (
    {
        username:{
            type:String,
            lowercase: true,
            required:true,
            unique:true,
            trim:true,
            index:true


        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
            trim:true,

        },
        fullName:{
            type:String,
            required:true,
            index:true,
            trim:true,

        },
        avatar:{
            type:String,
            
            
        },
        watchHistory:[
            {
                type: Schema.type.ObjectId,
                ref:"Video"
            }
        ],
        coverImage:{
            type:String,
            unique:true,
        },
        password:{
            type:String,
            required : [true,"password is required"],
            min:"8"
        },
        refreshToken:{
            type:String,
            required:true,

        },
        createdAt:{
            type:Date,
            required:true,

        },
        updatedAt:{
            type:Date,
            required:true,
        }
    },
    {
        timestamps:true
    }
)



export const User = mongoose.model("User",userSchema)