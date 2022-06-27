const productsModel = require ('../models/productosModels')
const categoriasModel = require('../models/categoriasModels')

module.exports = {
    getAll: async function(req, res, next) {
      try {
        let queryFind= {}
        if (req.query.buscar) {
          queryFind= {name: {$regex: ".*" + req.query.buscar + ".*", $options: "i"}} //Buscador tipo Like (expres. regulares)
        }
        const productos = await productsModel.find({destacados:true}).populate("categoria");
        //.select("name price")
        //.sort ({price:-1, name: 1})
        res.json(productos);
      } catch (e) {
        next(e)
      }
 },
    
    getById: async function(req, res, next) {
        console.log(req.params);
        try {
          const document = await productsModel.findById(req.params.id);
          res.json(document);
        } catch (e) {
          next(e);
        }
      },
    
    create: async function(req, res, next) {
      try{
        console.log (req.body)
        const producto = new productsModel({
          name: req.body.name,
          price: req.body.price,
          codigo: req.body.codigo,
          description: req.body.description,
          quantity: req.body.quantity,
          categoria: req.body.categoria,
          destacados: req.body.destacados
        })
        const document= await producto.save();
        res.status(201).json(document); //Cuando se recibe un Status201: Se creó exitosamente 
      } catch (e) {
        console.log(e)
        next(e)
        //res.status(500).json({error:e.message})
      }
    },

    update: async function(req, res, next) {
        console.log (req.params.id, req.body)
    try {
      const document = await productsModel.updateOne({_id: req.params.id}, req.body)
    } catch (e) {
      next(e)
    }
      },

    delete: async function(req, res, next) {
        console.log(req.params.id); 
        try {
          const document = await productsModel.deleteOne({_id:req.params.id})
        }catch (e){
          next(e)
        }
      }
}