import mongoose from "mongoose";

const userCollection = "users";
const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true },
    senha: { type: String, required: true }
});

export const userModel = mongoose.model(userCollection, userSchema);
