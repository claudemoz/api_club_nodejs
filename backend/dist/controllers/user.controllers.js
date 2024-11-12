"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRole = exports.logout = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("@/models/User"));
const UserFeature_1 = __importDefault(require("@/models/UserFeature"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const keys_1 = __importDefault(require("@/config/keys"));
const EXPIRATION_TOKEN = 259200000;
const register = async (req, res) => {
    const { email } = req.body;
    try {
        const userResult = await User_1.default.findOne({ where: { email }, logging: false });
        if (userResult) {
            res.status(400).json({ msg: "User already exists" });
        }
        else {
            const userCreated = await User_1.default.create(req.body);
            await UserFeature_1.default.create({ user_id: userCreated.user_id, feature_id: 2 });
            res.status(200).send(userCreated);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await User_1.default.findOne({ where: { email } });
        if (!user) {
            res.status(403).json({ error: "Email/Password mismatch" });
            return;
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(422).json({ error: "Email/Password mismatch" });
            return;
        }
        const token = createToken(user.user_id);
        res.cookie("accessToken", token, {});
        res.status(200).send();
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/api/v1/user/login',
        });
        res.status(200).send();
    }
    catch (e) {
        res.status(500).send();
    }
};
exports.logout = logout;
const createToken = (userId) => {
    console.log("SECRET.key createToken ", keys_1.default.key);
    const token = jsonwebtoken_1.default.sign({ userId: userId }, keys_1.default.key, {
        expiresIn: 60 * 60 * 24 * 30 * 6,
        algorithm: 'RS256',
    });
    return token;
};
const editRole = async (req, res) => {
    const { user_id } = req.params;
    const { role } = req.body;
    try {
        const user = await User_1.default.findOne({ where: { user_id } });
        if (!user) {
            res.status(404).json({ error: "user not found" });
            return;
        }
        if (role === 'admin') {
            await UserFeature_1.default.update({ feature_id: 1 }, { where: { user_id } });
        }
        else {
            await UserFeature_1.default.update({ feature_id: 2 }, { where: { user_id } });
        }
        res.status(200).send();
    }
    catch (e) {
        res.status(500).send();
    }
};
exports.editRole = editRole;
