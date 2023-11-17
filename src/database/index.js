import mongoose from "mongoose";

const connectToDB = async () =>{
    try {
        await mongoose.connect(
            "mongodb+srv://ali_khan_25:AliKhan@cluster0.aw3ylxl.mongodb.net/"
        );
        console.log('mongodb is connected')
    } catch (error) {
        console.log(error);
        
    }
};

export default connectToDB;