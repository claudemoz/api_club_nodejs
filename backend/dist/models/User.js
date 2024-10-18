'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class User extends sequelize_1.Model {
    static associate(models) {
    }
}
exports.User = User;
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: index_1.default,
    tableName: 'user',
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt_1.default.genSalt();
                const hashedPassword = await bcrypt_1.default.hash(user.password, salt);
                user.password = hashedPassword;
            }
            if (user.lastname) {
                user.lastname = user.lastname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase();
            }
            if (user.firstname) {
                user.firstname = user.firstname.trim().charAt(0).toUpperCase() + user.firstname.trim().slice(1);
            }
            if (user.email) {
                user.email = user.email.toLowerCase();
            }
        },
    },
});
exports.default = User;
