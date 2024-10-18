"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
exports.default = {
    key: fs_1.default.readFileSync('./src/config/keys/private.pem'),
    keyPub: fs_1.default.readFileSync('./src/config/keys/public.pem'),
};
