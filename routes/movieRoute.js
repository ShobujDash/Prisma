import { Router } from "express";
import { index, sotre } from "../controllers/MovieController.js";

const router = Router();



router.post('/',sotre)
router.get("/", index);



export default router