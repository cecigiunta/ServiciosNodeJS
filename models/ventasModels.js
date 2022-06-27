const mongoose = require('../bin/mongodb')

const ventaSchema = mongoose.Schema({
    producto: String,
    cliente: String,
    medioPago: String,
})

module.exports = mongoose.model("ventas", ventaSchema)