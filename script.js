const fs = require('fs');
/*const text = fs.readFileSync('script.js', 'utf-8');
console.log(text);*/

const http = require('http');
const server = http.createServer((req, res) => {
    const body = req.url === '/'
    ? fs.readFileSync('./public/index.html', 'utf-8')
    : fs.readFileSync('./public' + req.url, 'utf-8')
    //console.log(req.url);
    res.end(body)
    
});

server.listen(8181);

console.log('Server started');