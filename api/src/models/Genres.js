const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize) =>{
    Sequelize.define('genres',{
       name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}