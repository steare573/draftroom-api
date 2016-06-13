/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Draft_TeamQueue', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TeamId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Team',
        key: 'Id'
      }
    },
    Queue: {
      type: DataTypes.JSON,
      allowNull: true
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateTimeUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Draft_TeamQueue'
  });
};
