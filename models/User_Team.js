/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define('User_Team', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id',
      },
    },
    TeamId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Team',
        key: 'Id',
      },
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
    tableName: 'User_Team',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: false,
  }
);

