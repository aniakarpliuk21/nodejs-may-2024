const http = require('node:http');
const serverFn = async () => {
    const server = await http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    });

    server.listen(8000);
}
serverFn();
