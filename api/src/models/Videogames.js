const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.           
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    released: {
      type: DataTypes.DATE,
      allowNull:false,  
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }    
  },
  {
    timestamps: false
  });
};
