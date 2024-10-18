"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const authorize_1 = __importDefault(require("@/middlewares/authorize"));
const partner_controllers_1 = require("@/controllers/partner.controllers");
router.post("/create-partner", (0, authorize_1.default)([1, 9]), partner_controllers_1.createPartner);
router.get("/get-partner/:partner_id(\\d+)", partner_controllers_1.getPartner);
router.post("/update-partner/:partner_id(\\d+)", (0, authorize_1.default)([1, 10]), partner_controllers_1.updatePartner);
router.post("/delete-partner/:partner_id(\\d+)", (0, authorize_1.default)([1, 11]), partner_controllers_1.deletePartner);
exports.default = router;
