import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";

const user = sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
} );

sequelize.sync()
.then(()=>{
    console.log("users table created...")
}).catch(err=>{
    console.log("Internal server error",err)
})
export default user;