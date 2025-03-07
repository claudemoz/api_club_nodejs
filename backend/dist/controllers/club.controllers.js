"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClub = exports.createClub = exports.getClubInfo = void 0;
const Club_1 = __importDefault(require("@/models/Club"));
const getClubInfo = async (req, res) => {
    try {
        const club = await Club_1.default.findOne({ where: { club_id: req.params.club_id } });
        res.status(200).send(club);
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.getClubInfo = getClubInfo;
const createClub = async (req, res) => {
    try {
        const club = await Club_1.default.create(req.body);
        res.status(201).send(club);
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.createClub = createClub;
const updateClub = async (req, res) => {
    try {
        await Club_1.default.update(req.body, { where: { club_id: req.params.club_id } });
        res.status(200).send();
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.updateClub = updateClub;
