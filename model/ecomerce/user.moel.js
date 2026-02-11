import moongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:string,
        reqired:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
     email:{
        type:string,
        reqired:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:string,
        reqired:true,
    }, 
},{timestamps:true})

export const User = mongoose.model("User",userSchema)