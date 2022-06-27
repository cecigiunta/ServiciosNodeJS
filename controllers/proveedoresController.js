const proveedorModel = require('../models/proveedoresModels')

module.exports= {
    getAllProveedores: async function (req, res, next){
        try{
            const document = await proveedorModel.find()
            res.json(document)
        } catch(e){
            console.log(e)
            next(e)
        }
    },

    create: async function (req, res, next){
        try{
            console.log(req.body)
            const proveedor= new proveedorModel({
                name: req.body.name,
                telefono: req.body.telefono
            })
            const document = await proveedor.save()
            res.json(document)
        } catch(e){
            console.log(e)
            next(e)
        }
    },

    delete: async function(req, res, next){
        try{
            const document = await proveedorModel.deleteOne({_id: req.params.id})
            res.json(document)
        }catch (e){
            console.log(e)
            next(e)
        }
    }
}