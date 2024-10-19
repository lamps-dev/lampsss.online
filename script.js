async function shortenUrl() {
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    if (!urlInput) {
        resultDiv.textContent = 'Please enter a URL.';
        return;
    }

    try {
        const response = await fetch('https://lampsss.online/api/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput })
        });

        if (!response.ok) {
            throw new Error('Failed to shorten URL');
        }

        const data = await response.json();
        const shortUrl = data.shortUrl;

        resultDiv.innerHTML = `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message;
    }
}
