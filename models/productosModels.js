const mongoose = require('../bin/mongodb');
const errorMessages = require('../utils/errorMessages');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, errorMessages.General.obligatorio],
        minLength: 3,
        index: true
    },
    codigo: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        required: [true, errorMessages.General.obligatorio],
        min: [11, errorMessages.General.maxLength]
    },
    description: {
        type: String,
        minLength: 3
    },
    quantity: {
        type: Number,
        required: [true, errorMessages.General.obligatorio],
        minLength: 0
    },
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: "categorias" //La coleccion a la que se relaciona
    },
    destacados: {
        type: Boolean,
        required: [true, errorMessages.General.obligatorio]
    }
})

module.exports = mongoose.model("productos", productSchema)