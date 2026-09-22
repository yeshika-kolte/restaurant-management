import Restaurant from "../model/restaurant.model.js";
import Menuitem from "../model/menuitem.model.js";

export const createRestaurant = async (req, res, next) => {
    try {
        let { restaurantName } = req.body;

        let result = await Restaurant.create({ restaurantName });

        return res.status(201).json({
            message: "Restaurant created successfully",
            data: result
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

export const getAllRestaurants = async (req,res,next)=>{
    try {
       let restaurants = await Restaurant.findAll({
        include:[
            {
                model: Menuitem
            }
        ]
       });

       return res.status(200).json(restaurants);
    } catch (err) {
        console.log(err);
        return res.status(500).json({err:"Internal server error"});
    }
}