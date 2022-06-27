const mongoose = require('../bin/mongodb');

const categoriaSchema = new mongoose.Schema({
    name: String,
});

categoriaSchema.statics.findByIdAndValidate = async function(id){
    const document = await this.findById(id);
    if (!document){
        return {
            error:true,
            message: "no existe la categoria"
        }
    }
    return document;
}

module.exports = mongoose.model("categorias", categoriaSchema)