"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextMatchs = exports.getPreviousMatchs = exports.getMatchs = exports.deleteMatch = exports.updateMatch = exports.createMatch = void 0;
const Match_1 = __importDefault(require("@/models/Match"));
const sequelize_1 = require("sequelize");
const createMatch = async (req, res) => {
    try {
        const match = await Match_1.default.create(req.body);
        res.status(201).send(match);
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.createMatch = createMatch;
const updateMatch = async (req, res) => {
    const { team_id, status, score, date_match } = req.body;
    const { match_id } = req.params;
    try {
        const match = await Match_1.default.findOne({ where: { match_id } });
        if (!match) {
            res.status(404).send({ error: "Match not found" });
            return;
        }
        const now = new Date();
        const matchDate = new Date(match.date_match);
        if (matchDate < now) {
            match.team_id = team_id;
            match.status = status;
            match.date_match = date_match;
        }
        else {
            match.team_id = team_id;
            match.score = score;
            match.status = status;
            match.date_match = date_match;
        }
        await match.save();
        res.status(200).send();
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.updateMatch = updateMatch;
const deleteMatch = async (req, res) => {
    try {
        await Match_1.default.destroy({ where: { match_id: req.params.match_id } });
        res.status(200).send();
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.deleteMatch = deleteMatch;
const getMatchs = async (req, res) => {
    try {
        const matchs = await Match_1.default.findAll();
        res.status(200).send(matchs);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getMatchs = getMatchs;
const getPreviousMatchs = async (req, res) => {
    const { team } = req.query;
    try {
        const where = team ? {
            where: {
                date_match: { [sequelize_1.Op.lt]: new Date() }
            },
        } : {
            where: {
                date_match: { [sequelize_1.Op.gt]: new Date() }
            }
        };
        const matchs = await Match_1.default.findAll({ where, order: [['date_match', 'DESC']] });
        res.status(200).send(matchs);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getPreviousMatchs = getPreviousMatchs;
const getNextMatchs = async (req, res) => {
    const { team } = req.query;
    try {
        const where = team ? {
            where: {
                date_match: { [sequelize_1.Op.gt]: new Date() },
                team_id: team
            }
        } : {
            where: {
                date_match: { [sequelize_1.Op.gt]: new Date() }
            }
        };
        const matchs = await Match_1.default.findAll({ where, order: [['date_match', 'ASC']]
        });
        res.status(200).send(matchs);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getNextMatchs = getNextMatchs;
