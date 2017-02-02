/**
 * Model association a user to a user team (many to many)
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => sequelize.define(
  'User_Team',
  {
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

