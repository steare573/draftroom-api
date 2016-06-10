/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
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
    ShortName: {
      type: DataTypes.STRING,
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
    tableName: 'Position',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
    classMethods: {
      associate: (models) => {
        Position.belongsToMany(models.Player, {
          through: {
            model: models.Player_Position,
            unique: false,
          },
          foreignKey: 'PositionId',
        });
      },
    },
  });

  return Position;
};

