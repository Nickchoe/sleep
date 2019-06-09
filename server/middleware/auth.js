const { User } = require('./../models/user');

let auth = (req,res,next) => {
    let token = req.cookies.w_auth;
    console.log(req)

    User.findByToken(token,(err,user)=>{
        console.log(user + "Loggingd User")
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true 
        });

        req.token = token;
        req.user = user;
        next(); 
    })

}


module.exports = { auth }