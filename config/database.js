import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("MongoDB Connected Succesfully")
    } catch (error){
        console.log("MongoDB Connection Failed",error)

    }
}
export default dbConnect;