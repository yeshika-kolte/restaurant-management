import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";

const Menuitem = sequelize.define("menuitem", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    menuName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
})

export default Menuitem;