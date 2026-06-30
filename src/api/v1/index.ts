import { Router } from "express";
import healthRoutes from "./routes/health.routes";
import portfolioRoutes from "./routes/portfolio.routes";

const router = Router();

router.use("/", healthRoutes);
router.use("/", portfolioRoutes);

export default router;