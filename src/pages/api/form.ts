import type { NextApiRequest, NextApiResponse } from "next";

const TELEGRAM_TOKEN = process.env.TG_BOT_TOKEN;
const CHAT_ID = process.env.TG_CHAT_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ message: "Only POST allowed" });

    const { name, email, company, needs } = req.body;

    if (!name || !email || !company) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const message = `
        📩 Заявка с сайта tolqai.com
        
        Имя: ${name}
        Email: ${email}
        Компания: ${company}
        Сообщение: ${needs || "Not specified"}
    `;

        const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            }),
        });

        const tgData = await tgRes.json();
        if (!tgData.ok) throw new Error("Telegram API error");

        return res.status(200).json({ ok: true });
    } catch (err: unknown) {
        console.error(err);
        return res.status(500).json({ message: "Failed to send message" });
    }
}
