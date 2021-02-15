const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const body = req.url === '/'
    ? fs.readFileSync('./public/index.html', 'utf-8')
    : fs.readFileSync('./public' + req.url, 'utf-8')
    //console.log(req.url);
    res.end(body)
    
});

const port = process.env.PORT || 8181
server.listen(port);

console.log(`Server started on port ${port}`);