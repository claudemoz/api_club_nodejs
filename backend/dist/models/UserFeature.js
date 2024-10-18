'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFeature = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class UserFeature extends sequelize_1.Model {
    static associate(models) {
        UserFeature.belongsTo(models.User, { foreignKey: 'user_id' });
        UserFeature.belongsTo(models.Feature, { foreignKey: 'feature_id' });
    }
}
exports.UserFeature = UserFeature;
UserFeature.init({
    user_feature_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    feature_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    tableName: 'user_feature',
    timestamps: false,
});
exports.default = UserFeature;
