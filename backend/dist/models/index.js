"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const process_1 = __importDefault(require("process"));
const basename = path_1.default.basename(__filename);
const env = process_1.default.env.NODE_ENV || 'development';
const config = require(path_1.default.join(__dirname, '/../config/config.js'))[env];
const sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
exports.default = sequelize;
