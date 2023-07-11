import mongoose from "mongoose";
const userCollection = 'users';
const userSchema = new mongoose.Schema({ 

    fist_name: String,
    last_name: String,
    email:{
        type: String,
        unique: true,
        required: true
    }
})

export const userModel = mongoose.model(userCollection, userSchema);
