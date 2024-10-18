import { RequestHandler} from "express";
import News from '@/models/News';

export const createNews: RequestHandler = async (req, res) => {
  try {
    const news = await News.create({...req.body, date: new Date()});
    res.status(201).send(news);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const updateNews: RequestHandler = async (req, res) => {
  try {
    await News.update(req.body, {where:{news_id: req.params.news_id}});
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const getNews: RequestHandler = async (req, res) => {
  try {
    const news = await News.findOne({ where: { news_id : req.params.news_id } });
    res.status(200).send(news); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const deleteNews: RequestHandler = async (req, res) => {
  try {
    await News.destroy({ where: { news_id : req.params.news_id } });
    res.status(200).send(); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const getAllNews: RequestHandler = async (req, res)=> {
  try {
    const news = await News.findAll();
    res.status(200).send(news); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
