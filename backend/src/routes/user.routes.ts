import { Router } from "express";
const router = Router();
import {
  register,
  login,
  logout,
  editRole,
  getCurrentUser,
} from "@/controllers/user.controllers";

router.post("/register", register);
router.get("/current", getCurrentUser);
router.post("/login", login);
router.post("/logout", logout);
router.post("/edit-role/:user_id(\\d+)", editRole);

export default router;
