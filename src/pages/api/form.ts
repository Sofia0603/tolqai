import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests allowed" });
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

        return res.status(200).json({ ok: true }); // заглушка

    } catch (err) {
        console.error("API Error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
