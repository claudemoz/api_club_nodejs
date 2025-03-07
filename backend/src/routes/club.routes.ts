import { Router } from "express";
const router = Router();
import authorize from "@/middlewares/authorize";
import {
  createClub,
  updateClub,
  getClubInfo,
} from "@/controllers/club.controllers";

router.get("/club-info/:club_id(\\d+)", getClubInfo);
router.post("/create-club", authorize([1]), createClub);
router.post("/update-club/:club_id(\\d+)", authorize([1]), updateClub);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
