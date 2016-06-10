/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define('League_Team', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    LeagueId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'League',
        key: 'Id',
      },
    },
    TeamId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Team',
        key: 'Id',
      },
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
    tableName: 'League_Team',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
  }
);

