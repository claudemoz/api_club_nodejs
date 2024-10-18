import { RequestHandler} from "express";
import User from '@/models/User';
import UserFeature from '@/models/UserFeature';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import SECRET from "@/config/keys";

const EXPIRATION_TOKEN = 259200000;

export const register: RequestHandler = async (req, res) => {
  const { email } = req.body;
  
  try {
    const userResult= await User.findOne({ where: { email }, logging: false });
    
    if (userResult) {
      res.status(400).json({ msg: "User already exists" });
    } else {
      const userCreated = await User.create(req.body);
      await UserFeature.create({user_id: userCreated.user_id, feature_id: 2})
      res.status(200).send(userCreated);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
export const login:RequestHandler = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(403).json({ error: "Email/Password mismatch" });
      return;
    }
    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(422).json({ error: "Email/Password mismatch" });
      return;
    }

    const token = createToken(user.user_id);
    res.cookie("accessToken", token, {
      // httpOnly: true,
      // maxAge: Number(process.env.EXPIRATION_TOKEN) || EXPIRATION_TOKEN, 
    });

   res.status(200).send();
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export const logout: RequestHandler = async (req, res) => {
  try {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Utilise un cookie sécurisé si en production (HTTPS)
      sameSite: 'strict',  // Aide à prévenir les attaques CSRF
      path: '/api/v1/user/login',           // S'assure que le chemin du cookie est bien celui de la route
    });

   res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

const createToken = (userId: Number) => {
  console.log("SECRET.key createToken ", SECRET.key);
  
  const token = jwt.sign({ userId: userId }, SECRET.key, {
    expiresIn: 60 * 60 * 24 * 30 * 6,
    algorithm: 'RS256',
  });
  return token;
};

export const editRole: RequestHandler = async (req, res) => {
  const { user_id } = req.params;
  const { role } = req.body;
  try {
    const user = await User.findOne({ where: { user_id } });
    if (!user) {
      res.status(404).json({ error: "user not found" });
      return;
    }
    if (role === 'admin') {
      await UserFeature.update({ feature_id: 1 }, { where: { user_id } });
    }else{
      await UserFeature.update({ feature_id: 2 }, { where: { user_id } });
    }
   res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};