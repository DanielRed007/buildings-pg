import { Sequelize } from 'sequelize';
import * as path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '.', 'config.json'))[env];

const sequelize = new Sequelize(
  process.env.DATABASE_URL || config.database,
  config.username,
  config.password,
  config
);

export { sequelize };

