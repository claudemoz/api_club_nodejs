"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authorize;
const UserFeature_1 = __importDefault(require("@/models/UserFeature"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = __importDefault(require("@/config/keys"));
function authorize(requiredRights) {
    return async (req, res, next) => {
        var _a;
        const token = req.cookies.accessToken || ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]);
        try {
            console.log("token ", token);
            console.log("requiredRights ", requiredRights);
            if (!token) {
                res.status(403).json({ error: "Unauthorized x" });
                return;
            }
            const decodedToken = jsonwebtoken_1.default.verify(token, keys_1.default.keyPub);
            if (!decodedToken || !decodedToken.userId) {
                res.status(403).json({ error: "Invalid token" });
                return;
            }
            const userFeature = await UserFeature_1.default.findAll({
                where: { user_id: decodedToken.userId },
            });
            if (!userFeature) {
                res.status(403).json({ error: "Unauthorized" });
                return;
            }
            const userRights = userFeature === null || userFeature === void 0 ? void 0 : userFeature.map((r) => r.feature_id);
            console.log("userRights ", userRights);
            const hasRequiredRights = requiredRights.some((right) => {
                if (right === 1) {
                    return true;
                }
                else {
                    return userRights.includes(right);
                }
            });
            if (!hasRequiredRights) {
                res.status(403).json({ error: "Forbidden: insufficient rights" });
                return;
            }
            next();
        }
        catch (e) {
            console.error(e);
            res.status(500).send();
        }
    };
}
