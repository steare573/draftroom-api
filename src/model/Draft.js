/**
 * Model representing an instance of a Draft
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-02-01
 */
export default (sequelize, DataTypes) => {
  const Draft = sequelize.define(
    'Draft', {
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
      StartDateTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      DateTimeAdded: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      tableName: 'Draft',
      timestamps: true,
      createdAt: 'DateTimeAdded',
      updatedAt: false,
      classMethods: {
        associate: (models) => {
          Draft.belongsTo(models.League, {
            foreignKey: 'LeagueId',
          });
          Draft.belongsTo(models.Season, {
            foreignKey: 'SeasonId',
          });
        },
      },
    });

  return Draft;
};
