import mongoose, { model, Types } from "mongoose";




const massageSchema = new mongoose.Schema({
    contant: String,
    userId: {
        type: Types.ObjectId,
        ref:"ref"
    }
})
const massageModel = model("massage", massageSchema);



export default massageModel