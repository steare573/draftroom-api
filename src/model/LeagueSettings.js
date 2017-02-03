/**
 * Model representing settings of a particular league
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => sequelize.define(
  'LeagueSettings',
  {
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
    SeasonId: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      references: {
        model: 'Season',
        key: 'Id',
      },
    },
    Settings: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  }, {
    tableName: 'LeagueSettings',
  },
);

