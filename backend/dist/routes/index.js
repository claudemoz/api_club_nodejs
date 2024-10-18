"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_routes_1 = __importDefault(require("./user.routes"));
const news_routes_1 = __importDefault(require("./news.routes"));
const club_routes_1 = __importDefault(require("./club.routes"));
const partner_routes_1 = __importDefault(require("./partner.routes"));
const match_routes_1 = __importDefault(require("./match.routes"));
router.use("/user", user_routes_1.default);
router.use("/club", club_routes_1.default);
router.use("/news", news_routes_1.default);
router.use("/partner", partner_routes_1.default);
router.use("/match", match_routes_1.default);
exports.default = router;
