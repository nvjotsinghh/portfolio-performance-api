import { Request, Response } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

/**
 * Calculates portfolio performance.
 */
export const getPortfolioPerformance = (
    req: Request,
    res: Response
): void => {

    const initialInvestment = Number(req.query.initialInvestment);
    const currentValue = Number(req.query.currentValue);

    if (
        Number.isNaN(initialInvestment) ||
        Number.isNaN(currentValue)
    ) {
        res.status(400).json({
            success: false,
            message: "Invalid request parameters."
        });

        return;
    }

    if (initialInvestment <= 0) {

        res.status(400).json({
            success: false,
            message: "Initial investment must be greater than zero."
        });

        return;

    }

    const portfolio = calculatePortfolioPerformance(
        initialInvestment,
        currentValue
    );

    res.status(200).json({
        success: true,
        data: portfolio
    });

};