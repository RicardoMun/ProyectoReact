const bcrypt = require("bcrypt-node.js")
const User = require("../models/user.model")
const UserService = require("../services/user.service")
const service = new UserService()

function signUp(res, req){
    const user = new User()
    const {name, lastName, email, password, repeatPassword } = req.body

    user.name = name
    user.lastName = lastName
    user.email = email
    user.active = true

    if(!password || !repeatPassword) {
        res.status(404).send({ message: "Las contraseñas no coinciden"})

    }else{ 
        if(password == repeatPassword) {
            user.password = bcrypt.hashSync(password);
            console.log("Bienvenido");
            try {
              const data = service.createUser(user);
              res.status(201).json(data);
            } catch (error) {
              res.status(404).json({ message: error });
            }
        }
    }

}

module.exports = {signUp}