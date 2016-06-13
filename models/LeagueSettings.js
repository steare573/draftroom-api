/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeagueSettings', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    LeagueId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'League',
        key: 'Id'
      }
    },
    SeasonId: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      references: {
        model: 'Season',
        key: 'Id'
      }
    },
    Settings: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'LeagueSettings'
  });
};
