const mongoose = require('../bin/mongodb')

const proveedorSchema = mongoose.Schema({
    name: String,
    telefono: Number,
})

module.exports = mongoose.model("proveedores", proveedorSchema)