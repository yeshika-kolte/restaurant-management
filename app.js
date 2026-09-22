import express from "express";
import bodyParser from "body-parser";
import "./model/association.js"; 
import userRouter from "./routes/user.router.js";
import restaurantRouter from "./routes/restaurant.router.js";
import menuitemRouter from "./routes/menuitem.router.js";
import orderRouter from "./routes/order.router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/users", userRouter);
app.use("/restaurants", restaurantRouter);
app.use("/menu-items", menuitemRouter);
app.use("/orders", orderRouter);


app.listen(process.env.PORT,()=>{
    console.log("Server started...")
});
