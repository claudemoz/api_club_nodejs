"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNews = exports.deleteNews = exports.getNews = exports.updateNews = exports.createNews = void 0;
const News_1 = __importDefault(require("@/models/News"));
const createNews = async (req, res) => {
    try {
        const news = await News_1.default.create(Object.assign(Object.assign({}, req.body), { date: new Date() }));
        res.status(201).send(news);
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.createNews = createNews;
const updateNews = async (req, res) => {
    try {
        await News_1.default.update(req.body, { where: { news_id: req.params.news_id } });
        res.status(200).send();
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
exports.updateNews = updateNews;
const getNews = async (req, res) => {
    try {
        const news = await News_1.default.findOne({ where: { news_id: req.params.news_id } });
        res.status(200).send(news);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getNews = getNews;
const deleteNews = async (req, res) => {
    try {
        await News_1.default.destroy({ where: { news_id: req.params.news_id } });
        res.status(200).send();
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.deleteNews = deleteNews;
const getAllNews = async (req, res) => {
    try {
        const news = await News_1.default.findAll();
        res.status(200).send(news);
    }
    catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
exports.getAllNews = getAllNews;
