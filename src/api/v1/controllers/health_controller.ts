import { Request, Response } from "express";

/**
 * Returns API health status.
 */
export const getHealth = (_req: Request, res: Response): void => {
    res.status(200).json({
        success: true,
        status: "UP",
        version: "v1",
        timestamp: new Date().toISOString()
    });
};