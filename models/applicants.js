"use strict";
module.exports = (sequelize, DataTypes) => {
  const applicants = sequelize.define(
    "applicants",
    {
      ApplicantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      PhoneNumber: DataTypes.STRING,
      Height: DataTypes.STRING,
      weight: DataTypes.STRING,
      GoalWeight: DataTypes.STRING,
      GoalDescription: DataTypes.STRING, 
      Program: DataTypes.STRING
    },
    {}
  );
  applicants.associate = function(models) {
    // associations can be defined here
  };
  return applicants; 
};
