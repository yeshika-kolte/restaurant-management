import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = (req,res, next)=>{
    try {
         if(req.headers.authorization){
            let token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, process.env.SECRET_KEY);
            console.log("Token verified successfully");
            next();
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({message:"Unauthorized access.."})
    }
}