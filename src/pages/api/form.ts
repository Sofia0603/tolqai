import type { NextApiRequest, NextApiResponse } from "next";

type RateLimitRecord = { count: number; lastTime: number };
const rateLimitMap: Record<string, RateLimitRecord> = {};
const LIMIT = 5;
const WINDOW_MS = 60 * 1000;
const MAX_BODY_SIZE = 10 * 1024;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests allowed" });
    }

    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    const now = Date.now();
    const record = rateLimitMap[ip as string] || { count: 0, lastTime: now };

    if (now - record.lastTime > WINDOW_MS) {
        // сброс окна
        record.count = 0;
        record.lastTime = now;
    }

    if (record.count >= LIMIT) {
        return res.status(429).json({ message: "Too many requests, please try again later." });
    }

    record.count += 1;
    rateLimitMap[ip as string] = record;

    if (process.env.NODE_ENV === "production") {
        const origin = req.headers.origin || req.headers.referer;
        if (!origin || !origin.includes("yourdomain.com")) {
            return res.status(403).json({ message: "Forbidden" });
        }
    }

    if (!req.body || JSON.stringify(req.body).length > MAX_BODY_SIZE) {
        return res.status(413).json({ message: "Request payload too large" });
    }

    try {
        const { name, email, company, needs } = req.body;

        if (!name || !email || !company) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }

        await new Promise((resolve) => setTimeout(resolve, 600));

        return res.status(200).json({ ok: true });
    } catch (err) {
        if (process.env.NODE_ENV === "development") {
            console.error("API Error:", err);
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}
