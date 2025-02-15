import jwt from "jsonwebtoken";


export const verifyToken =(req,res,next)=>{
const token =req.cookies.token

    if(!token) return res.status(401).json({
        message:"Not authenticated!"
    });

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, payload) => {
        if(error) return res.status(403).json({ message:"Token is not Valid!"});

        //req ke andr daal diya payload is ko 
        req.userId =payload.id ;
        next();
    })

   
}