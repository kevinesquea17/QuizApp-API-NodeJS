import generarJWT from '../helpers/generarJWT.js';
import Admin from '../models/Admin.js'


const registrarAdmin = async (req, res) => {
    try {
        const admin = new Admin(req.body);
        const adminSaved = await admin.save();
        
        res.status(200).json(adminSaved);
    } catch (error) {
        const e = new Error('No se pudo registral usuario');
        res.status(500).json({msg: e.message})
    }
}

const autenticar = async (req, res) => {
    const {email, password} = req.body;
    const admin = await Admin.findOne({email})

    if(!admin){
        const error = new Error('El usuario no existe');
        return res.status(403).json({msg: error.message})
    }

    if(await admin.comprobarPassword(password)){
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generarJWT(admin.id)
        }); 
    }else{
        const error = new Error("El password es incorrecto");
        return res.status(403).json({msg: error.message}); 
    }
}


export {
    registrarAdmin,
    autenticar
}