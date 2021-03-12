const fs = require('fs');
const http = require('http');


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