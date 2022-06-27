const ventaModel = require ('../models/ventasModels')

module.exports = {
    getAllVentas: async function(req, res, next){
        try {
            const document = await ventaModel.find();
            res.json(document);
        } catch(e) {
            console.log(e)
        }
    },

    getById: async function(req, res, next){
        console.log(req.params.id)
       try{ 
           const document = await ventaModel.findById(req.params.id)
           res.json(document);
       }
       catch(e){
           console.log(e)
       }
    },

    delete: async function(req, res, next){
        try{
            const document = await ventaModel.deleteOne({_id: req.params.id})
            res.json(document)
        } catch(e) {
            console.log(e)
        }
    }
}