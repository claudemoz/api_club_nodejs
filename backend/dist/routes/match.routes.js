"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorize_1 = __importDefault(require("@/middlewares/authorize"));
const router = (0, express_1.Router)();
const match_controllers_1 = require("@/controllers/match.controllers");
router.post("/create-match", (0, authorize_1.default)([1]), match_controllers_1.createMatch);
router.get("/delete-match/:match_id(\\d+)", (0, authorize_1.default)([1, 13]), match_controllers_1.deleteMatch);
router.post("/update-match/:match_id(\\d+)", (0, authorize_1.default)([1, 14]), match_controllers_1.updateMatch);
router.post("/get-matchs", match_controllers_1.getMatchs);
exports.default = router;
