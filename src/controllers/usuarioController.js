const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  agregaUsuarios,
  buscarUsuarioPorEmail,
  usuarios
} = require("../models/usuarios.js");

exports.registrarUsuario = async (req, res) => {
  let { nombre, email, password } = req.body;
  password = await bcrypt.hash(req.body.password, 12);
  try {
    await agregaUsuarios(nombre, email, password);
    res.status(201).json({ mensaje: "usuario creado exitosamente" });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const result = await usuarios();
    res.status(201).json({ result });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;
  const usuario = await buscarUsuarioPorEmail(email);
  if (!usuario) {
    res.status(401).json({ mensaje: "El usuario no exista" });
  } else {
    if (!bcrypt.compareSync(password, usuario.password)) {
      res.status(401).json({ mensaje: "Contraseña incorrecta" });
    } else {
      const token = jwt.sign(
        {
          id: usuario.id,
        },
        process.env.JWT_KEY
      );
      res.status(200).json({ mensaje:"Usuario logueado correctamente",token });
    }
  }
};
