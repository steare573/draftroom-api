/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Season', {
    Id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'Season',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
  }
);

