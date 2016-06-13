/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Draft', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StartDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Draft'
  });
};
