const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Homework</title></head>');
        res.write('<body><h1>Hello World!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/test') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Homework</title></head>');
        res.write('<body><h1>Test Now</h1></body>');
        res.write('</html');
        return res.end();
    }
    if (url === '/redirect') {
        // const body = [];
        // req.on('data', chunk => {
        //     body.push(chunck);
        // });
        // req.on('end', () => {
        //     const parsedbody = Buffer.concat(body).toString();
        //     //console.log(parsedBody.split('=')[1]);
        // });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}); 

server.listen(3000);