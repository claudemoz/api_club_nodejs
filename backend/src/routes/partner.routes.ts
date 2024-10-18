import { Router } from "express";
const router = Router();
import authorize from "@/middlewares/authorize";
import { createPartner, getPartner, updatePartner, deletePartner } from "@/controllers/partner.controllers";

router.post("/create-partner",authorize([1, 9]), createPartner);
router.get("/get-partner/:partner_id(\\d+)", getPartner);
router.post("/update-partner/:partner_id(\\d+)", authorize([1, 10]), updatePartner);
router.post("/delete-partner/:partner_id(\\d+)", authorize([1, 11]), deletePartner);
// router.post("/login", login);
// router.post("/logout", logout);


export default router;
