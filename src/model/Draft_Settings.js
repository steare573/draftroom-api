/**
 * Model representing settings for aparticular draft.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => sequelize.define(
  'Draft_Settings',
  {
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
  }
);
