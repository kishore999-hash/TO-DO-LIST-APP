import mongoose from "mongoose";

const mongooseConnect=async()=>{
    const a=await mongoose.connect("mongodb://localhost:27017/WEBSITE")
    .then(()=>{console.log("MONGOOSE CONNECTED");})
    .catch((e)=>{console.log(e)})
}

export default mongooseConnect