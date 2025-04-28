import mongoose, { model } from "mongoose";




const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    PasswordConfirmation:String,
    
})


const userModel = model("user", userSchema);
export default userModel;