"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const authorize_1 = __importDefault(require("@/middlewares/authorize"));
const news_controllers_1 = require("@/controllers/news.controllers");
router.post("/create-news", (0, authorize_1.default)([1, 6]), news_controllers_1.createNews);
router.post("/get-all-news", news_controllers_1.getAllNews);
router.post("/update-news/:news_id(\\d+)", (0, authorize_1.default)([1, 7]), news_controllers_1.updateNews);
router.post("/delete-news/:news_id(\\d+)", (0, authorize_1.default)([1, 8]), news_controllers_1.deleteNews);
exports.default = router;
