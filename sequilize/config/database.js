const {Sequelize}=require('sequelize');

const sequilize=new Sequelize({
    dialect:'sqlite',
    storage:'./item.sqlite'
});

module.exports=sequilize;