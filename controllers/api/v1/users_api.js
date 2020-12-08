const User = require('../../../model/Users');
const jwt = require('jsonwebtoken');


//this will register the user
module.exports.register = function(req,res){

    try{

        User.create({email:req.body.email,password:req.body.password},function(err,user){
            if(err){
                console.log('Error in user registration',err);
                return;
            }
            
            return res.json(200,{
                data: {
                    users: user
                },
                message: "User registered successfully"
            });
        });

    }catch(err){
        console.log(err);
        return res.json(500,{
            message: "Internal Server Error"
        });

    }
}


//this will help to login the user
module.exports.login = async function(req,res){

    try{

        let user = await User.findOne({email:req.body.email});

    if(!user || user.password != req.body.password){
        return res.json(433,{
            messsage: "Invalid username or password"
        });
    }

    return res.json(200,{
        message: "Login Successfully",
        //create token
        data: {
            //this set the token and send it to the user
            token: jwt.sign(user.toJSON(),'algo8',{expiresIn: '200000000000'})
        }
    });

    }catch(err){
        console.log('error',err)
        return res.json(500,{
            message: 'Internal server error'
        });
    }
    
}