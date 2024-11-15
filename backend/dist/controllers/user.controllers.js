"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRole = exports.logout = exports.login = exports.register = exports.getCurrentUser = void 0;
const User_1 = __importDefault(require("@/models/User"));
const UserFeature_1 = __importDefault(require("@/models/UserFeature"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const keys_1 = __importDefault(require("@/config/keys"));
const EXPIRATION_TOKEN = 259200000;
const getCurrentUser = async (req, res) => {
    const { accessToken } = req.cookies;
    try {
        if (!accessToken) {
            res.json(null);
            return;
        }
        const decodedToken = jsonwebtoken_1.default.verify(accessToken, keys_1.default.keyPub);
        if (!decodedToken || !decodedToken.userId) {
            res.json(null);
            return;
        }
        const user = await User_1.default.findOne({
            where: { user_id: decodedToken.userId },
        });
        if (!user) {
            res.json(null);
            return;
        }
        const _a = user.toJSON(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
        console.log(userWithoutPassword);
        res.status(200).send(userWithoutPassword);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};
exports.getCurrentUser = getCurrentUser;
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
            const _a = userCreated.toJSON(), { password: userPassword } = _a, userWithoutPassword = __rest(_a, ["password"]);
            res.status(200).send(userWithoutPassword);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
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
        const _a = user.toJSON(), { password: userPassword } = _a, userWithoutPassword = __rest(_a, ["password"]);
        res.status(200).send(userWithoutPassword);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
        });
        res.status(200).send();
    }
    catch (e) {
        res.status(500).send();
    }
};
exports.logout = logout;
const createToken = (userId) => {
    const token = jsonwebtoken_1.default.sign({ userId: userId }, keys_1.default.key, {
        expiresIn: 60 * 60 * 24 * 30 * 6,
        algorithm: "RS256",
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
        if (role === "admin") {
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
