import express from "express";
import { createOrder, getOrderByUser, getAllOrders } from "../controller/order.controller.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/user/:userId", getOrderByUser);
router.get("/all", getAllOrders);


export default router;