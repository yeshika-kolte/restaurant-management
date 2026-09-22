import Restaurant from "./restaurant.model.js";
import Menuitem from "./menuitem.model.js";
import user from "./user.model.js";
import Order from "./order.model.js";

Restaurant.hasMany(Menuitem);
Menuitem.belongsTo(Restaurant);

user.hasMany(Order);
Order.belongsTo(user);

Menuitem.hasMany(Order);
Order.belongsTo(Menuitem);
