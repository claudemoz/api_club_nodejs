import { Router } from "express";
import authorize from "@/middlewares/authorize";
const router = Router();
import { createMatch, deleteMatch, updateMatch, getMatchs } from "@/controllers/match.controllers";

router.post("/create-match", authorize([1]), createMatch);
router.get("/delete-match/:match_id(\\d+)", authorize([1, 13]), deleteMatch);
router.post("/update-match/:match_id(\\d+)", authorize([1, 14]), updateMatch);
router.post("/get-matchs", getMatchs);
// router.post("/login", login);
// router.post("/logout", logout);


export default router;
