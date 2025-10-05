import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI){
    throw new Error("Please add MONGO_URI");
}

let isConnected =false;

const connectDB =async()=>{
    if (isConnected) return;
    try{
        await mongoose.connect(MONGO_URI);
        isConnected =true;
        console.log("mongoDB connected");
    }
    catch(error){
        console.log("MongoDB connection error.Following error has occurred.........\n",error)
    }
}

export default connectDB;