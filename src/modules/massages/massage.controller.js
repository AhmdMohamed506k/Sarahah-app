
import massageModel from './../../../db/models/massage.model.js';


export const massage = async(req, res, next) => {

  const massage= await massageModel.find({userId:req.session.userId})

   
    const url = `${req.protocol}://${req.headers.host}/user/${req.session.userId }`

     if (req.session.loggedIn) {
        return res.render("massage.ejs", { session: req.session, link: url, massage })
         
     } 
    res.redirect("/login");
    
 
   
}




export const sendMasg = async (req, res, next) => {
     
    await massageModel.create({ contant: req.body.masg, userId: req.params.id })

    res.redirect("/user/${req.params.id}")
 
    
}
