/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Player_Position', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    PlayerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Player',
        key: 'Id',
      },
    },
    PositionId: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      references: {
        model: 'Position',
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
    tableName: 'Player_Position',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
  }
);
