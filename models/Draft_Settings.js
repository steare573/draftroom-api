/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Draft_Settings', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    DraftId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Draft',
        key: 'Id',
      },
    },
    Settings: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'Draft_Settings',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
  });
};
