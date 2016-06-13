/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('League_Draft', {
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
    DraftId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Draft',
        key: 'Id'
      }
    }
  }, {
    tableName: 'League_Draft'
  });
};
