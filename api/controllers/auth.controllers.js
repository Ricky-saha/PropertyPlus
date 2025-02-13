import bcrpyt from "bcrypt"
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"


export const register = async (req,res)=>{

    //-----------------db operations----------

    // destructuring the incoming data from req.body
    const {username, email, password }= req.body;


    try{
            //Hash the password
            const hashedPassword = await bcrpyt.hash(password,10);

            console.log(hashedPassword);
            // res.json({"message": hashedPassword});
        
        
            // create a new user and save in db 
            // here user is the collection of the mongo db 
            const newUser = await prisma.user.create({
                data:{
                    username,
                    email,
                    password:hashedPassword
                },
            });
        
            console.log(newUser);
            res.status(201).json({"message": "user created successfully"});
        }catch(error){
            
        console.log(error)
        res.status(500).json({"message": "Failed to create user"})
    }
};



export const login = async (req,res)=>{
    //db operations
    const {username,password} =req.body
    try{

        // IF THE USER EXIST OR NOT

        const user = await prisma.user.findUnique({
            where:{username}
        })

        if(!user) {
            return res.status(401).json({"message": "Invalid Credentials"});
        }


        // IF THE PWD IS CORRECT OR NOT

        const isPasswordValid = await bcrpyt.compare(password, user.password)

        if(!isPasswordValid){
            return res.status(401).json({"message":"Invalid Credentials"});
        }


        // GENERATE A COOKIE TOKEN AND SEND IT TO THE USER

        // res.setHeader("Set-Cookie", "test=" + "myValue").json({
        //     "message":"success"
        // })

        const age = 1000*60*60*60*7

        // what is inside of our token
        const token = jwt.sign(
        {
            id:user.id,
            isAdmin:true
        },
        process.env.JWT_SECRET_KEY, 
        {expiresIn :age}
        );

        // taking the information from the db after login for future use in local storage

        const {password:userPassword, ...userInfo} = user 


        // sending our token inside a cookie
        res.cookie("token", token, {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production', // Auto-enable in production
            maxAge:age,
            path: '/'
        }).status(200)
        .json(userInfo)
       
        console.log(userInfo);
        console.log(process.env.JWT_SECRET_KEY) // FOR TESTING

    }catch(error){
        console.log(error);
        res.status(501).json({"message":"error has occured while logging inn..."})
    }
};

export const logout =(req,res) =>{
//db operations
res.clearCookie("token").status(200).json({message:"Logout successfull"})
}
