/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'Player',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
    classMethods: {
      associate: (models) => {
        Player.belongsToMany(models.NflTeam, {
          through: {
            model: models.Player_NflTeam,
            unique: false,
          },
          foreignKey: 'PlayerId',
        });

        Player.belongsToMany(models.Position, {
          through: {
            model: models.Player_Position,
            unique: false,
          },
          foreignKey: 'PlayerId',
        });
      },
    },
  });

  return Player;
};
