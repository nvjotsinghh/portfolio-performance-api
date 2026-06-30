import { Router, Request, Response } from "express";

const router = Router();

/**
 * Health check endpoint.
 */
router.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    status: "UP",
    version: "v1",
    timestamp: new Date().toISOString(),
  });
});

export default router;