import { Router } from "express";
const router = Router();
import authRoutes from "./user.routes";
import newsRoutes from "./news.routes";
import clubRoutes from "./club.routes";
import partnerRoutes from "./partner.routes";
import matchRoutes from "./match.routes";

// import userRoutes from "./user.routes";
router.use("/user", authRoutes);
router.use("/club", clubRoutes);
router.use("/news", newsRoutes);
router.use("/partner", partnerRoutes);
router.use("/match", matchRoutes);

export default router;
