'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Match extends sequelize_1.Model {
    static associate(models) {
        Match.belongsTo(models.Team, { foreignKey: 'team_id' });
    }
}
exports.Match = Match;
Match.init({
    match_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    score: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    date_match: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('victoire', 'défaite', 'nul'),
        allowNull: false,
    },
    team_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    tableName: 'match',
    timestamps: false,
});
exports.default = Match;
