import request from "supertest";
import app from "../src/app";

describe("Health API", () => {

    it("should return server health", async () => {

        const response = await request(app)
            .get("/api/v1/health");

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.status).toBe("UP");

        expect(response.body.version).toBe("v1");

    });

});