const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize) =>{
    Sequelize.define('genres',{
       name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        created:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
          }
        
    },{
        timestamps: false
      })
}