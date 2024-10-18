"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNews = exports.deletePartner = exports.getPartner = exports.updatePartner = exports.createPartner = void 0;
const Partner_1 = __importDefault(require("@/models/Partner"));
const createPartner = async (req, res) => {
    try {
        const news = await Partner_1.default.create(Object.assign(Object.assign({}, req.body), { date: new Date() }));
        res.status(201).send(news);
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.createPartner = createPartner;
const updatePartner = async (req, res) => {
    try {
        await Partner_1.default.update(req.body, { where: { partner_id: req.params.news_id } });
        res.status(200).send();
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.updatePartner = updatePartner;
const getPartner = async (req, res) => {
    try {
        const partner = await Partner_1.default.findOne({ where: { partner_id: req.params.partner_id } });
        res.status(200).send(partner);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getPartner = getPartner;
const deletePartner = async (req, res) => {
    try {
        await Partner_1.default.destroy({ where: { partner_id: req.params.partner_id } });
        res.status(200).send();
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.deletePartner = deletePartner;
const getAllNews = async (req, res) => {
    try {
        const partners = await Partner_1.default.findAll();
        res.status(200).send(partners);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getAllNews = getAllNews;
