import { Sequelize } from "sequelize";
const sequelize = new Sequelize("food_order", "root", "yeshika@1611",{
    host:"localhost",
    dialect:"mysql"
});

sequelize.sync()
.then(()=>{
    console.log("Database connected...")
}).catch(err=>{
    console.log(err)
    console.log("Database connection Failed...")
});

export default sequelize;