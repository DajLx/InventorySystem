const pool = require("../bd");
const bc = require("bcrypt");

class UsuariosServices {
  // hay que buscar un usuario en base a su email para comprobar que realmente el usuario existe.
  //siendo que el usuario exista, ahi tomaremos el hash que tiene el bd para compararlo con el hash que tambien no estan mandando en la solicitud.
  // si el hash coincide, login existoso, de lo contrario, devolvemos null.
  static async login(email, pass) {
    const [rows, fields] = await pool.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [email],
    );
    console.log(rows);
    if (rows.length === 0) throw new Error("Usuario no encontrado");
    const user = rows[0];
    const coincide = await bc.compare(pass, user.pass);
    console.log(coincide);
    if (!coincide) throw new Error("La contraseña no es correcta");
    return { rol: user.rol, name: user.nombre, email };
  }
}

module.exports = UsuariosServices;
