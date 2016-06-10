/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
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
    tableName: 'Team',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
    classMethods: {
      associate: (models) => {
        Team.belongsToMany(models.User, {
          through: {
            model: models.User_Team,
            unique: false,
          },
          foreignKey: 'TeamId',
        });
        Team.belongsToMany(models.League, {
          through: {
            model: models.League_Team,
            unique: false,
          },
          foreignKey: 'TeamId',
        });
      },
    },
  });

  return Team;
};
