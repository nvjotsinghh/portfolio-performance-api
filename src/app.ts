import express, { Express } from "express";

const app: Express = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Portfolio Performance API is running."
  });
});

export default app;