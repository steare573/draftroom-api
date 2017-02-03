/**
 * Model representing an pick in a particular draft.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => sequelize.define(
  'DraftPick',
  {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    PickNumber: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    TeamId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Team',
        key: 'Id',
      },
    },
    PlayerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Player',
        key: 'Id',
      },
    },
    DateTimeAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'DraftPick',
  },
);
