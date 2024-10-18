'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Team extends sequelize_1.Model {
    static associate(models) {
    }
}
exports.Team = Team;
Team.init({
    team_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    tableName: 'team',
    timestamps: false,
});
exports.default = Team;
