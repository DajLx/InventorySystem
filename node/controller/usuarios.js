const userServices = require("../services/usuariosServices");

const login = async (req, res) => {
    
  try {
    const { email, pass } = req.body;
    const user = await userServices.login(email, pass);
    res.status(200).send({...user, found:true});
  } catch (error) {
    const jsonError= {error:error.message,found:false};
    if(error.message==="Usuario no encontrado") return res.status(401).send(jsonError)
    return res.status(500).send(jsonError)
  }
    
  
};

module.exports = { login };
