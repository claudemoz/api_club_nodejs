import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, Dialect } from 'sequelize';
import process from 'process';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  use_env_variable?: string;
}

// Importation du fichier de configuration
const config: DatabaseConfig = require(path.join(__dirname, '/../config/config.json'))[env];

// Déclaration du type pour notre base de données
interface DB {
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
}

const sequelize = new Sequelize(config.database, config.username, config.password, config) as Sequelize;

export default sequelize;
