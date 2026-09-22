import User from "../model/user.model.js";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerUser = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        let salt = await brcypt.genSalt(10);
        let hashPassword = await brcypt.hash(password, salt);

        let user = await User.create({
            username,
            email,
            password: hashPassword
        })

        res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};


export const loginUser = async (req,res,next)=>{
    try {
        let{email,password} = req.body;
        let user = await User.findOne({where:{email}});

        if(!user){
            return res.status(401).json({message:"User not found"})
        }

        let isMatch = await brcypt.compare(password, user.password);

        if(!isMatch)
            return res.status(401).json({message:"Invalid password"})
        
        let token = jwt.sign({id:user.id, email:user.email}, process.env.SECRET_KEY, {expiresIn:"30m"});
        res.status(200).json({message:"Login successful..", token})

    } catch (err) {
        console.log(err);
        return res.status(500).json({err:"Internal server error"})
    }
}

export const getAlluser = async (req,res,next)=>{
    try {
        let users = await User.findAll();

        return res.status(200).json(users);

    } catch (err) {
        console.log(err);
        return res.status(200).json({err:"Internal server error"});
    }
}