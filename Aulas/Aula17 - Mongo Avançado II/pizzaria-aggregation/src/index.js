import mongoose from 'mongoose'

import orderModel from './models/pedido.model.js'

const mongoAtlasUri = "mongodb+srv://ale:ale@cluster0.g630o1p.mongodb.net/pizzaria?retryWrites=true&w=majority"

const environment = async() => {
    {
        await mongoose.connect(mongoAtlasUri)
        let result = await orderModel.insertMany(
            [
                {nome: 'Calabresa', tamanho: 'pequena', preco: 10, quantidade: 2, date: "2023-06-12T19:12Z"},
                {nome: 'Calabresa', tamanho: 'media', preco: 15, quantidade: 5, date: "2023-06-12T20:30Z"},	
                {nome: 'Calabresa', tamanho: 'grande', preco: 20, quantidade: 22, date: "2023-06-12T20:34Z"},	
                {nome: 'Mussarela', tamanho: 'pequena', preco: 10, quantidade: 4, date: "2023-06-12T18:30Z"},
                {nome: 'Mussarela', tamanho: 'media', preco: 15, quantidade: 1, date: "2023-06-12T19:33Z"},
                {nome: 'Mussarela', tamanho: 'grande', preco: 20, quantidade: 18, date: "2023-06-12T20:40Z"},
                {nome: 'Portuguesa', tamanho: 'pequena', preco: 10, quantidade: 0, date: "2023-06-12T20:30Z"},
                {nome: 'Portuguesa', tamanho: 'media', preco: 15, quantidade: 1, date: "2023-06-12T20:30Z"},
                {nome: 'Portuguesa', tamanho: 'grande', preco: 20, quantidade: 10, date: "2023-06-12T20:30Z"},
                {nome: 'Frango', tamanho: 'pequena', preco: 10, quantidade: 6, date: "2023-06-12T20:30Z"},
                {nome: 'Frango', tamanho: 'media', preco: 15, quantidade: 11, date: "2023-06-12T20:30Z"},
                {nome: 'Frango', tamanho: 'grande', preco: 20, quantidade: 29, date: "2023-06-12T20:30Z"}
            ]
        );
        console.log(result);
    }
    
    const agregate = async() => {
        await mongoose.connect(mongoAtlasUri);
    
        let listaPedidos = await orderModel.aggregate([
            { $match: {tamanho: "media"} },
            { $group: { _id: "$nome", quantidadeTotal: { $sum: "$quantidade" }}},
            { $sort: { quantidadeTotal: -1 }},
            { $group: { _id:1, pedidos: { $push: "$$ROOT"}} },
            { $project: { _id: 0, pedidos: "$pedidos" }},
            { $merge: { into: 'relatorios'}}
        ])
        console.log(listaPedidos);
    }
}



environment();

//agregate();