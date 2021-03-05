const fs = require('fs');
const http = require('http');

/*const server = http.createServer((req, res) => {
   
    const body = req.url === '/'
    ? fs.readFileSync('./public/index.html', 'utf-8')
    : fs.readFileSync('./public' + req.url, 'utf-8')
    //console.log(req.url);
    res.end(body)
    const filePath = req.url.substr(1)
    // смотрим, есть ли такой файл
    fs.access(filePath, fs.constants.R_OK, (err) => {
      // если произошла ошибка - отправляем статусный код 404
      if (err) {
        res.statusCode = 404
        res.end('Not found!')
      } else {
        fs.createReadStream(filePath).pipe(res)
      }
    })
});

const port = process.env.PORT || 8181
server.listen(port);

console.log(`Server started on port ${port}`);
*/


const server = http.createServer(function (request, response) {
  console.log(`Запрошенный адрес: ${request.url}`)
  try {
    let filePath = './public' + request.url
    if (fs.statSync(filePath).isDirectory()) {
      filePath += '/index.html';
    }
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        response.statusCode = 404
        response.end('Resourse not found!')
      } else {
        fs.createReadStream(filePath).pipe(response)
      }
    })
  } catch (err) {
    console.log('Ошибка сервера')
  }
})

const port = process.env.PORT || 8181
server.listen(port);

console.log(`Server started on port ${port}`);