/**
 * Base model module containing all models and their associations
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2017-02-01
 */
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';
const basename = path.basename(module.filename);
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// read all models form this directory and register them with sequelize instance
fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// expose sequelize instance and class itself to access constants and other statics
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
