'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tutorials = sequelize.define('Tutorials', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Tutorials.associate = function(models) {
    // associations can be defined here
  };
  return Tutorials;
};