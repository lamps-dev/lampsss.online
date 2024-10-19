// api/[shortCode].js
export default function handler(req, res) {
    const { shortCode } = req.query;
    const originalUrl = urlDatabase[shortCode];

    if (originalUrl) {
        res.writeHead(302, { Location: originalUrl });
        res.end();
    } else {
        res.status(404).send('URL not found');
    }
}
