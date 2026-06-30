import express, { Express } from "express";
import apiV1Routes from "./api/v1";

const app: Express = express();

app.use(express.json());

app.use("/api/v1", apiV1Routes);

app.get("/", (_req, res) => {

    res.status(200).json({
        success: true,
        message: "Portfolio Performance API"
    });

});

export default app;