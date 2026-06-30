import express, { Express } from "express";
import apiV1Routes from "./api/v1";

const app: Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Portfolio Performance API",
  });
});

app.use("/api/v1", apiV1Routes);

export default app;