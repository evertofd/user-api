const { pool } = require("../db/config");

exports.agregaUsuarios = async (nombre, email, password) => {
  try {
    console.log("aqui llego?");
    const SQLQuery =
      "INSERT INTO usuarios(nombre,email,password) VALUES($1,$2,$3);";
    const SQLValues = [nombre, email, password];
    const result = await pool.query(SQLQuery, SQLValues);
    return result[0];
  } catch (error) {
    throw new Error("Error al crear el usuario:" + error.message);
  }
};

exports.buscarUsuarioPorEmail = async (email) => {
    try {
      
      const SQLQuery =
        "SELECT * FROM usuarios WHERE email=$1;";
      const SQLValues = [email];
      const result = await pool.query(SQLQuery, SQLValues);
      return result.rows[0];
    } catch (error) {
      throw new Error("Error al crear el usuario:" + error.message);
    }
  };


exports.usuarios =async()=>{
  try {
    const SQLQuery =
      "SELECT * FROM usuarios";
    const result = await pool.query(SQLQuery);
    return result.rows;
  } catch (error) {
    throw new Error("Error al crear el usuario:" + error.message);
  }
}

/*  */
