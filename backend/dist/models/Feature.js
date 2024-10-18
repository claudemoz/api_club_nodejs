'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feature = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Feature extends sequelize_1.Model {
    static associate(models) {
    }
}
exports.Feature = Feature;
Feature.init({
    feature_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM('role', 'right'),
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    tableName: 'feature',
    timestamps: false,
});
exports.default = Feature;
