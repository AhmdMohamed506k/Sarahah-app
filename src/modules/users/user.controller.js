
import userModel from './../../../db/models/user.model.js';

import  session  from 'express-session';





export const sarahahIndex = (req, res, next) => {
  
    res.render("index.ejs")
}

export const user = (req, res, next) => {
    
    res.render("user.ejs",{session:req.session})
}


export const register = (req, res, next) => {

    if (req.session.loggedIn) {
        return res.redirect("/massage")
      }
    res.render("register.ejs", {
        error:req.query.error
    })
}

export const login = (req, res, next) => {

    if (req.session.loggedIn) {
       return res.redirect("/massage")
     }

    const { error } = req.query;
    res.render("login.ejs", {
        error
    })
}

export const logout = (req, res, next) => {
    req.session.destroy(function(err) {
       res.redirect("/login")
      })
    
  
}



export const handleRegister = async (req, res, next) => {

   
    const { name, email, password, PasswordConfirmation } = req.body;

    const UserExist =await userModel.findOne({ email });
    
    
    if (UserExist) {
        return res.redirect("/register?error=sorry Email is already registered ");
   
        
    }
    await userModel.create({ name, email, password, PasswordConfirmation })
    res.redirect("/massage")

   
}




export const handleLogin = async (req, res, next) => {

    
    const { email, password } = req.body
    const userExist = await userModel.findOne({ email });
    if (!userExist || password != userExist.password) {
      return  res.redirect("/login?error=Sorry invalid Email or password ")
    }


   
    
    req.session.userId = userExist._id;
    req.session.name = userExist.name;
    req.session.loggedIn = true
    
    res.redirect("/massage");


}
