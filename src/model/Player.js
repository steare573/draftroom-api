/**
 * Model representing an NFL player
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => {
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
