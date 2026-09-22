import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";

const Order = sequelize.define("orders",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    menuitemId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:true,
        defaultValue:1
    },
    totalAmount:{
        type:DataTypes.FLOAT,
        allowNull:true
    }
});

export default Order;