import Order from "../model/order.model.js";
import Menuitem from "../model/menuitem.model.js";
import user from "../model/user.model.js";

export const createOrder = async (req,res)=>{
    try{
        let {userId, menuitemId, quantity} = req.body;

        let menu = await Menuitem.findByPk(menuitemId);

        if(!menu){
            return res.status(401).json({message:"Menu Item not found"})
        }

        let totalAmount = menu.price * quantity;

        let order = await Order.create({
            userId,
            menuitemId,
            quantity,
            totalAmount
        });

        return res.status(201).json({message:"Order placed successfully.."})

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error:"Internal server error"
        });
    }
}

export const getOrderByUser = async (req,res,next)=>{
    try {
        let {userId} = req.params;

        let orders = await Order.findAll({
            where:{userId},
            include:[
                {model: Menuitem}
            ]
        });

        return res.status(200).json(orders);


    } catch (err) {
        console.log(err);
        return res.status(500).json({err:"Internal server error"})
    }
}

export const getAllOrders = async (req,res,next)=>{
    try {
        let orders = await Order.findAll({
        include:[
            {model: Menuitem},
            {model: user}
        ]
    });

    return res.status(200).json(orders);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Internal server error"})
    }
}