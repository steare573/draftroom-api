/**
 * Model representing a user.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Password: {
      type: 'BINARY(60)',
      allowNull: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
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
    DateTimeUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'User',
    timestamps: true,
    createdAt: 'DateTimeAdded',
    updatedAt: 'DateTimeUpdated',
    classMethods: {
      associate: (models) => {
        User.belongsToMany(models.Team, {
          through: {
            model: models.User_Team,
            unique: false,
          },
          foreignKey: 'UserId',
        });
      },
    },
  });

  return User;
};
