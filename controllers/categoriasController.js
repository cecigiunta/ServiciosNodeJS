const categoriasModel = require('../models/categoriasModels')

module.exports= {
    getAllCategorias: async function (req, res, next){
        try{
            const document = await categoriasModel.find()
            res.json(document)
        } catch(e){
            next(e)
        }
    },

    create: async function (req, res, next){
        try{
            console.log(req.body)
            const categoria= new categoriasModel({
                name: req.body.name,
            })
            const document = await categoria.save()
            res.json(document)
        } catch(e){
            next(e)
        }
    }
}