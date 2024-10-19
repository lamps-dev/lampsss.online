// api/shorten.js
const { nanoid } = require('nanoid');

let urlDatabase = {}; // In-memory storage

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }

        const shortCode = nanoid(8);
        urlDatabase[shortCode] = url;

        const shortUrl = `https://${req.headers.host}/${shortCode}`;
        res.json({ shortUrl });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
