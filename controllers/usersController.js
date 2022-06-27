const userModel = require ('../models/usersModels');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

module.exports = {
    getAllUsers: async function(req, res, next) {
      try {
        const document = await userModel.find()
        res.json(document)
        console.log(document)
      } catch (e){
        console.log(e)
      }
      },

    registro: async function(req, res, next) {
      try {
        console.log(req.body)
        const users= new userModel({
          name: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          rol: req.body.rol
        })
        const document = await users.save()
        res.json (document)
      } catch (e) {
        console.log(e)
        next(e)
      }
    },
    
    login: async function(req, res, next) {
        console.log(req.body)
        try {
          const user = await userModel.findOne({email: req.body.email})
          if (!user) {
            return res.json({message:"El email es incorrecto"});
          }
          if (bcrypt.compareSync(req.body.password, user.password)){ //Si esto da TRUE, el usr y passw son correctos
            const payload = {userId: user._id}
            const token = jwt.sign(payload, req.app.get("secretKey"), {expiresIn: "1h"})
            return res.status(200).json({token});
          } else {
            return res.status(401).json({message:"Contraseña incorrecta"});
          }
        } catch (e) {}
      },
    
    update: async function(req, res, next) {
        console.log (req.params.id, req.body)
        try{
          const document = await userModel.updateOne({_id: req.params.id} , req.body)
          res.json()
        } catch(e) {
          console.log(e)
          next(e)
        }
      },
}