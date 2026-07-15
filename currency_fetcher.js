const http = require('http');
const https = require('https');
const { exec } = require('child_process');

const PORT = 3457; // Unique port for currency fetcher

// Public API endpoint for exchange rates
const API_URL = 'https://open.er-api.com/v6/latest/USD';

const server = http.createServer((req, res) => {
    // 1. Manual CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    // 2. Built-in Routing
    if (req.url === '/api/eval' && req.method === 'POST') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', () => {
            try {
                const { script } = JSON.parse(body);
                // 3. CLI Bridge Execution
                exec(`obsidian eval ${JSON.stringify(script)}`, (err, stdout) => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: !err, result: stdout }));
                });
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
            }
        });
        return;
    }

    if (req.url === '/api/rates' && req.method === 'GET') {
        https.get(API_URL, (apiRes) => {
            let data = '';
            apiRes.on('data', chunk => data += chunk);
            apiRes.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            });
        }).on('error', (err) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
        });
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Currency Fetcher Sovereign Node Online");
});

server.listen(PORT, () => {
    console.log(`Currency Fetcher Sovereign Node listening on port ${PORT}`);
});
