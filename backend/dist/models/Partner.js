'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partner = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Partner extends sequelize_1.Model {
    static associate(models) {
    }
}
exports.Partner = Partner;
Partner.init({
    partner_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    logo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: index_1.default,
    tableName: 'partner',
    timestamps: false,
});
exports.default = Partner;
