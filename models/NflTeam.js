/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const NflTeam = sequelize.define('NflTeam', {
    Id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    State: {
      type: DataTypes.CHAR(2),
      allowNull: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Country: {
      type: DataTypes.ENUM('US'),
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
    tableName: 'NflTeam',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
    classMethods: {
      associate: (models) => {
        NflTeam.belongsToMany(models.Player, {
          through: {
            model: models.Player_NflTeam,
            unique: false,
          },
          foreignKey: 'NflTeamId',
        });
      },
    },
  });

  return NflTeam;
};
