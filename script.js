const fs = require('fs');
// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8181;

app.use(express.static('./public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
});

app.get('/catalogitemslist/:pagenum', (req, res) => {
  const pagenum = req.params.pagenum;
  fs.readFile(`./public/data/items${pagenum}.json`, 'utf8', (err, data) => {
    res.send(data);
  })
});

app.get('/cartitemslist', (req, res) => {
  fs.readFile('./public/data/usercart.json', 'utf8', (err, data) => {
    res.send(data);
  })
});

// app.post('/usercartfile', (req, res) => {
//   const offset = 1;
//   const filePath = './public/data/usercart.json'
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     const list = data //JSON.parse(data || {});
//     const amountOfData = Object.keys(list).length;
    
//     const newId = offset + amountOfData + 1;
//     const newItem = req.body;
//     console.log(newItem);
//     newItem.id = newId;
//     console.log(list);
//     console.log(JSON.stringify(list));
    
//     list[newId] = newItem;
//     fs.writeFile(filePath, JSON.stringify(list), (err) => {
//       if (err) {
//         console.log(err);
//         }
//         console.log("sended");
//         console.log(list);
//         res.send(list);
        
//     })
//   })
// });
app.post('/usercartfile', (req, res) => {
  // const offset = 6;
  const filePath = './public/data/usercart.json';
  fs.writeFileSync(filePath, JSON.stringify(req.body), (err) => {
    // res.send(req.body);
    console.log(res)
  })

  // fs.readFile(filePath, 'utf8', (err, data) => {
    // console.log(`server req.body: ${req.body}`);
    
    // let currentFileData = JSON.parse(data || {});
    // console.log(`server list after parse: ${currentFileData}`);
    // const amountOfData = Object.keys(currentFileData).length;
    // console.log(`server amountofdata: ${amountOfData}`);
    // const newID = offset + amountOfData + 1;
    // const newItem = req.body;
    // newItem.id = newID;
    // currentFileData = {...currentFileData, ...newItem};
    // console.log(`server list with newId: ${currentFileData}`);
    // fs.writeFile(filePath, JSON.stringify(currentFileData), (err) => {
    //   res.send(currentFileData);
    // })
  //})
});

// const server = http.createServer(function (request, response) {
//   console.log(`Запрошенный адрес: ${request.url}`)
//   try {
//     let filePath = './public' + request.url
//     if (fs.statSync(filePath).isDirectory()) {
//       filePath += '/index.html';
//     }
//     fs.access(filePath, fs.constants.R_OK, (err) => {
//       if (err) {
//         response.statusCode = 404
//         response.end('Resourse not found!')
//       } else {
//         fs.createReadStream(filePath).pipe(response)
//       }
//     })
//   } catch (err) {
//     console.log('Ошибка сервера')
//   }
// })

// const port = process.env.PORT || 8181
// server.listen(port);

// console.log(`Server started on port ${port}`);