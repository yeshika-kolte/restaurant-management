import express from "express";
import { createMenuitem, getMenuByRestaurants} from "../controller/menuitem.controller.js";

const router = express.Router();

router.post("/", createMenuitem);
router.get("/restaurant/:restaurantId", getMenuByRestaurants);

export default router;