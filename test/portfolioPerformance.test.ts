import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("Portfolio Performance Function", () => {

    it("should calculate an excellent performance", () => {

        // Arrange
        const initialInvestment = 10000;
        const currentValue = 14000;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result.profitOrLoss).toBe(4000);
        expect(result.percentageChange).toBe(40);
        expect(result.performanceSummary).toBe("Excellent performance!");

    });

    it("should calculate a solid gain", () => {

        const result = calculatePortfolioPerformance(10000, 12000);

        expect(result.profitOrLoss).toBe(2000);
        expect(result.percentageChange).toBe(20);
        expect(result.performanceSummary).toBe("Solid gain.");

    });

    it("should calculate a minor loss", () => {

        const result = calculatePortfolioPerformance(10000, 9500);

        expect(result.profitOrLoss).toBe(-500);
        expect(result.percentageChange).toBe(-5);
        expect(result.performanceSummary).toBe("Minor loss.");

    });

    it("should calculate a significant loss", () => {

        const result = calculatePortfolioPerformance(10000, 7000);

        expect(result.profitOrLoss).toBe(-3000);
        expect(result.percentageChange).toBe(-30);
        expect(result.performanceSummary).toBe("Significant loss.");

    });

});