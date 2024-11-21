import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log('DB CONNECTED: ', `${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("DB CONNECTION FAILED: ", error);
        process.exit(1)
    }
}

export default connectDB;