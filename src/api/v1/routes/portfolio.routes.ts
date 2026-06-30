import { Router, Request, Response } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

/**
 * Calculate portfolio performance.
 *
 * GET /api/v1/portfolio/performance
 *
 * Query Parameters:
 * - initialInvestment
 * - currentValue
 */
router.get("/portfolio/performance", (req: Request, res: Response) => {
  const initialInvestment = Number(req.query.initialInvestment);
  const currentValue = Number(req.query.currentValue);

  // Basic validation
  if (
    Number.isNaN(initialInvestment) ||
    Number.isNaN(currentValue)
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Both initialInvestment and currentValue are required and must be numbers.",
    });
  }

  if (initialInvestment <= 0) {
    return res.status(400).json({
      success: false,
      message: "Initial investment must be greater than zero.",
    });
  }

  const result = calculatePortfolioPerformance(
    initialInvestment,
    currentValue
  );

  return res.status(200).json({
    success: true,
    data: result,
  });
});

export default router;