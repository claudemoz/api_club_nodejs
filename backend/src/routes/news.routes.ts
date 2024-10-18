import { Router } from "express";
const router = Router();
import authorize from "@/middlewares/authorize";
import { createNews, getAllNews, updateNews, deleteNews } from "@/controllers/news.controllers";

router.post("/create-news", authorize([1, 6]), createNews);
router.post("/get-all-news", getAllNews);
router.post("/update-news/:news_id(\\d+)",authorize([1, 7]), updateNews);
router.post("/delete-news/:news_id(\\d+)",authorize([1, 8]), deleteNews);
// router.post("/login", login);
// router.post("/logout", logout);


export default router;
