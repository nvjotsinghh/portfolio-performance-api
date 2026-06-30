import { Router } from "express";
import { getPortfolioPerformance } from "../controllers/portfolio.controller";

const router = Router();

router.get(
    "/portfolio/performance",
    getPortfolioPerformance
);

export default router;