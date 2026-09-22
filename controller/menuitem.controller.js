import Menuitem from "../model/menuitem.model.js";

export const createMenuitem = async (req, res, next) => {
    try {
        let { menuName, price, restaurantId } = req.body;

        let result = await Menuitem.create({
            menuName,
            price,
            restaurantId
        });

        return res.status(201).json({
            message: "Menu item created successfully",
            data: result
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

export const getMenuByRestaurants = async (req,res,next)=>{
    try {
        let {restaurantId} = req.params;

        let menuitems = await Menuitem.findAll({
            where:{restaurantId}
        });

        return res.status(200).json(menuitems);
    } catch (err) {
        console.log(err);
        return res.status(500).json({err:"Internal server error"})
    }
}