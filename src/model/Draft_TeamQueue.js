/**
 * Model representing a teams queue in a particular draft.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => sequelize.define(
  'Draft_TeamQueue',
  {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    TeamId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Team',
        key: 'Id',
      },
    },
    Queue: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DateTimeUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'Draft_TeamQueue',
  },
);
