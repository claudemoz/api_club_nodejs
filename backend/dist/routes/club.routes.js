"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const authorize_1 = __importDefault(require("@/middlewares/authorize"));
const club_controllers_1 = require("@/controllers/club.controllers");
router.post("/create-club", (0, authorize_1.default)([1]), club_controllers_1.createClub);
router.post("/update-club/:club_id(\\d+)", (0, authorize_1.default)([1]), club_controllers_1.updateClub);
exports.default = router;
