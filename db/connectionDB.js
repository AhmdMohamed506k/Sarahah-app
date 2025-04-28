import mongoose  from "mongoose"




const connectionDB = async() => {
    return await mongoose.connect("mongodb://localhost:27017/sarahaha")
    .then(() => console.log("successfully connected :)"))
    .catch((error) => console.log("catch Error", error));



}

export default connectionDB