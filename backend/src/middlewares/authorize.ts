import { Request, Response, NextFunction } from "express";
import fs from "fs";
import UserFeature from "@/models/UserFeature";
import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import SECRET from "@/config/keys";
// console.log(SECRET.keyPub);
interface DecodedToken {
  userId: number;
}

export default function authorize(requiredRights: number[]) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token =
      req.cookies.accessToken || req.headers.authorization?.split(" ")[1];
    // console.log("authorization ", req.headers, authorization);

    try {
      console.log("token ", token);
      console.log("requiredRights ", requiredRights);

      if (!token) {
        res.status(403).json({ error: "Unauthorized x" });
        return;
      }

      // Vérification du token
      const decodedToken = jsonwebtoken.verify(
        token,
        SECRET.keyPub
      ) as JwtPayload;
      if (!decodedToken || !decodedToken.userId) {
        res.status(403).json({ error: "Invalid token" });
        return;
      }

      // Rechercher les droits de l'utilisateur
      const userFeature = await UserFeature.findAll({
        where: { user_id: decodedToken.userId },
      });

      if (!userFeature) {
        res.status(403).json({ error: "Unauthorized" });
        return;
      }

      // Validation des droits
      const userRights = userFeature?.map((r) => r.feature_id);
      console.log("userRights ", userRights);

      const hasRequiredRights = requiredRights.some((right) => {
        if (right === 1) {
          return true;
        } else {
          return userRights.includes(right);
        }
      });

      if (!hasRequiredRights) {
        res.status(403).json({ error: "Forbidden: insufficient rights" });
        return;
      }

      next();
    } catch (e) {
      console.error(e);
      res.status(500).send();
    }
  };
}
