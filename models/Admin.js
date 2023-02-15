import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const AdminSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

AdminSchema.pre('save', async function (next) {
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

AdminSchema.methods.comprobarPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;