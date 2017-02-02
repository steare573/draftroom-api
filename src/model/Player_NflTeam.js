/**
 * Model used to associate a player to an NFL team
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => sequelize.define(
  'Player_NflTeam',
  {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    PlayerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Player',
        key: 'Id',
      },
    },
    NflTeamId: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      references: {
        model: 'NflTeam',
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
    tableName: 'Player_NflTeam',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
  }
);

