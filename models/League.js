/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('League', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'League',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
    classMethods: {
      associate: (models) => {
        League.belongsToMany(models.Team, {
          through: {
            model: models.League_Team,
            unique: false,
          },
          foreignKey: 'LeagueId',
        });

        League.hasMany(models.Draft, { foreignKey: 'LeagueId' });
      },
    },
  });

  return League;
};
