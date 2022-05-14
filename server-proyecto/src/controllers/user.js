const bcrypt = require("bcrypt-nodejs")
const User = require("../models/user.model")
const UserService = require("../services/user.service")
const service = new UserService()

function signUp(res, req){
    const user = new User()
    const {name, email, password, repeatPassword } = req.body

    user.name = name
    user.email = email
    user.role = "admin"
    user.active = true

    if(!password || !repeatPassword) {
        res.status(404).send({ message: "Las contraseñas son obligatorias"})
    }else{ 
        if(password !== repeatPassword) {
            res.status(404).send({ message: "Las contraseñas no coinciden"})
        }else{
          bcrypt.hash(password, null, null, function(err, hash){
            if(err){
              res.status(500).send({ message: "Error para encriptar la contraseña"})
            }else{
              User.password = hash
              User.save((err, userStored) => {
                if(err){
                  res.status(500).send({ message: "El usuario ya existe"})
                }else{
                  if(!userStored){
                    res.status(404).send({ message: "Error al crear usuario"})
                  }else{
                    res.status(200).send({ user: userStored})
                  }
                }
              })
            }
          })
        }
    }

}

module.exports = {signUp}