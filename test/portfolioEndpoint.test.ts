import request from "supertest";
import app from "../src/app";

describe("Portfolio Endpoint", () => {

    it("should return calculated portfolio performance", async () => {

        const response = await request(app)
            .get("/api/v1/portfolio/performance")
            .query({
                initialInvestment: 10000,
                currentValue: 14000
            });

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.data.profitOrLoss).toBe(4000);

        expect(response.body.data.percentageChange).toBe(40);

    });

    it("should return 400 for invalid input", async () => {

        const response = await request(app)
            .get("/api/v1/portfolio/performance");

        expect(response.status).toBe(400);

    });

});