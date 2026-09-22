import express from "express";
import { createRestaurant, getAllRestaurants } from "../controller/restaurant.controller.js";

const router = express.Router();

router.post("/",createRestaurant);
router.get("/all", getAllRestaurants);

export default router;