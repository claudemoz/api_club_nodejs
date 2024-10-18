'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Club extends sequelize_1.Model {
    static associate(models) {
    }
}
exports.Club = Club;
Club.init({
    club_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    history: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
}, {
    sequelize: index_1.default,
    tableName: 'club',
    timestamps: false,
});
exports.default = Club;
