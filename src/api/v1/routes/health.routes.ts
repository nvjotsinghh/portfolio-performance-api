import { Router } from "express";
import { getHealth } from "../controllers/health_controller";

const router = Router();

router.get("/health", getHealth);

export default router;