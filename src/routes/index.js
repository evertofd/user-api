const express = require("express")
const router = express.Router();
const auth = require("../midlewares/auth.js")
const usuariosController = require("../controllers/usuarioController.js")

module.exports=()=>{
    router.get("/",(req,res)=>{
        res.status(200).send("Bienvenido a mi marketplace con nuestro super cambio")
    })

    // usuarios
    router.post("/crear_cuenta",usuariosController.registrarUsuario)
    router.post("/iniciar_sesion", usuariosController.login)
    router.get("/usuarios",auth,usuariosController.obtenerUsuarios)
    //productos
    //categorias

    return router
}