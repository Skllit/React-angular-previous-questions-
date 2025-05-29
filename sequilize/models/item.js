const  {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const item=sequelize.define('Item',{
    Id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrment:true,
    },
    description:{
        type:DataTypes.STRING,
    },
    createdAt:{
        type:DataTypes.DATE,
        default:DataTypes.NOW,
    },



});
module.exports=item;