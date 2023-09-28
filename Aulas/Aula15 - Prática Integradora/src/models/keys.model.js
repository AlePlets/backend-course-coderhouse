import mongoose from "mongoose";
const keyCollection = 'pix-key';
const keySchema = new mongoose.Schema({ 
        key: {
            type: String,
            unique: true,
        },
        keyType: String,
        createDate:{
            type: Date,
            default: () => moment().tz('America/Sao_Paulo').toDate(),
    },
    user: String,
});

export const keyModel = mongoose.model(keyCollection, keySchema);
