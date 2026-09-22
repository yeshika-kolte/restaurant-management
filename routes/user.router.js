import express from "express";
import {registerUser, loginUser, getAlluser} from "../controller/user.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", getAlluser);
router.get("/profile", auth, (req,res)=>{
    return res.status(200).json({message:"Welcome to your profile..."})
})

export default router;