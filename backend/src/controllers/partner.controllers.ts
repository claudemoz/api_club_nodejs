import { RequestHandler} from "express";
import Partner from '@/models/Partner';

export const createPartner: RequestHandler = async (req, res) => {
  try {
    const news = await Partner.create({...req.body, date: new Date()});
    res.status(201).send(news);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const updatePartner: RequestHandler = async (req, res) => {
  try {
    await Partner.update(req.body, {where:{partner_id: req.params.news_id}});
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const getPartner: RequestHandler = async (req, res) => {
  try {
    const partner = await Partner.findOne({ where: { partner_id : req.params.partner_id } });
    res.status(200).send(partner); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const deletePartner: RequestHandler = async (req, res) => {
  try {
    await Partner.destroy({ where: { partner_id : req.params.partner_id } });
    res.status(200).send(); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const getAllNews: RequestHandler = async (req, res) => {
  try {
    const partners = await Partner.findAll();
    res.status(200).send(partners); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
