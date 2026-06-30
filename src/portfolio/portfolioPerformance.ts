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
 * Calculates portfolio performance.
 *
 * @param initialInvestment Initial investment amount.
 * @param currentValue Current portfolio value.
 * @returns Portfolio performance details.
 */
export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {

  const profitOrLoss = currentValue - initialInvestment;

  const percentageChange =
    Number(((profitOrLoss / initialInvestment) * 100).toFixed(2));

  const performanceSummary =
    percentageChange >= 30
      ? "Excellent performance!"
      : percentageChange >= 10
      ? "Solid gain."
      : percentageChange >= 0
      ? "Modest growth."
      : percentageChange >= -10
      ? "Minor loss."
      : "Significant loss.";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}