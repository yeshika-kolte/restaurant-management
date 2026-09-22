import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";

const Restaurant = sequelize.define("restaurants",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    restaurantName:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default Restaurant;