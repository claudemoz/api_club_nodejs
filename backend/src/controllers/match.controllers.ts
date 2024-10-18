import { RequestHandler} from "express";
import Match from '@/models/Match';
import { Op } from 'sequelize';

export const createMatch: RequestHandler = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).send(match);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const updateMatch: RequestHandler = async (req, res) => {
  const { team_id, status, score, date_match } = req.body
  const { match_id } = req.params
  try {
    const match = await Match.findOne({where:{match_id}})
    if(!match){
      res.status(404).send({ error: "Match not found" });
      return;
    }

    const now = new Date();
    const matchDate = new Date(match.date_match);

    if (matchDate < now) {
      match.team_id = team_id;
      match.status = status;
      match.date_match = date_match;
    } else {
      match.team_id = team_id;
      match.score = score;
      match.status = status;
      match.date_match = date_match;
    }
    await match.save();
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const deleteMatch: RequestHandler = async (req, res) => {
  try {
    await Match.destroy({ where: { match_id : req.params.match_id } });
    res.status(200).send(); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const getMatchs:RequestHandler = async (req, res) => {
  try {
    const matchs = await Match.findAll();
    res.status(200).send(matchs); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const getPreviousMatchs:RequestHandler = async (req, res) => {
  const { team } = req.query
  try {
    const where = team ? {
      where: {
        date_match: { [Op.lt]: new Date() } 
      },
    } : {
      where: {
        date_match: { [Op.gt]: new Date() } 
      }
    }
    const matchs = await Match.findAll({where, order: [['date_match', 'DESC']]});
    res.status(200).send(matchs); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
export const getNextMatchs:RequestHandler  = async (req, res) => {
  const { team } = req.query
  try {
    const where = team ? {
      where: {
        date_match: { [Op.gt]: new Date() },
        team_id:  team
      }
    } : {
      where: {
        date_match: { [Op.gt]: new Date() } 
      }
    }
    const matchs = await Match.findAll({where,order: [['date_match', 'ASC']] 
    });
    res.status(200).send(matchs); 
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
