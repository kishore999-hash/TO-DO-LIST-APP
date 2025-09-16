import mongoose from "mongoose";

const mSchema=new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    todo:{type:[String],default:[]}
})

const model=mongoose.model("USERS",mSchema)
    
export default model