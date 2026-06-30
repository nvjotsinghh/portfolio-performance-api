import { Router } from "express";
import healthRoutes from "./routes/health.routes";

const router = Router();

router.use("/", healthRoutes);

export default router;