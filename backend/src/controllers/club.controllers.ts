import { RequestHandler} from "express";
import Club from '@/models/Club';

export const createClub: RequestHandler = async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.status(201).send(club);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
export const updateClub: RequestHandler = async (req, res) => {
  try {
    await Club.update(req.body, {where:{club_id: req.params.club_id}});
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};