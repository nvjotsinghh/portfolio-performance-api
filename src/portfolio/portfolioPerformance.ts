import { PERFORMANCE_MESSAGES } from "./constants";

/**
 * Represents the result of a portfolio performance calculation.
 */
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

/**
 * Calculates the performance of an investment portfolio.
 *
 * @param initialInvestment - The initial amount invested.
 * @param currentValue - The current value of the investment.
 * @returns Portfolio performance details.
 */
export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;

  const percentageChange = Number(
    ((profitOrLoss / initialInvestment) * 100).toFixed(2)
  );

  const performanceSummary =
    percentageChange >= 30
      ? PERFORMANCE_MESSAGES.EXCELLENT
      : percentageChange >= 10
      ? PERFORMANCE_MESSAGES.SOLID_GAIN
      : percentageChange >= 0
      ? PERFORMANCE_MESSAGES.MODEST_GROWTH
      : percentageChange >= -10
      ? PERFORMANCE_MESSAGES.MINOR_LOSS
      : PERFORMANCE_MESSAGES.SIGNIFICANT_LOSS;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}