const ProveedoresServices= require("../services/proveedoresServices")

const getAllProveedors = async (req,res) => {
    try {
        const proveedors= await ProveedoresServices.getProvers();
        
        res.status(200).send(proveedors)
    } catch (error) {
     res.status(500).send("error inesperado")   
    }
};

module.exports ={getAllProveedors}
