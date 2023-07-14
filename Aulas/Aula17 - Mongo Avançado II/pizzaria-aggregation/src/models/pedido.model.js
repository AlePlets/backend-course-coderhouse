import mongoose from 'mongoose';

const orderCollection = "orders";

const pedidosCollection = 'pedidos';

const pedidoSchema = new mongoose.Schema ({
    nome:String,
    tamanho: {
        type:String,
        enum: ["pequena", "media", "grande"],
        default: "media"
    },
    price: Number,
    quantity: Number,
    date: Date
});

const orderModel = mongoose.model (orderCollection, pedidoSchema);

export default orderModel;