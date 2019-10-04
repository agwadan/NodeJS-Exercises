/* const Automobile = require('./automobile');

const car1 = new Automobile('Dodge Demon' , 700);
const car2 = new Automobile('Ford Mustang RTR', 680);

car1.testing();
car2.testing(); */

//We also have access to the directory path and the file name as show below
//console.log(__dirname, __filename)

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /*   if (req.url === '/'){
  
          fs.readFile(
              path.join(__dirname, 'public', 'index.html'),
              (err, content)=>{
                  if (err) throw err;
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end(content);
              }
          )
  
          
      }
  
     else if (req.url === '/about'){
  
          fs.readFile(
              path.join(__dirname, 'public', 'about.html'),
              (err, content)=>{
                  if (err) throw err;
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end(content);
              }
          )
          
      }
  
      else if (req.url === '/api/users'){
          const users = [
              {name: 'Agwa Dan', age: '22'},
              {name: 'Araka Stephen', age: '23'}            
          ]
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(users));
      } */

    //Build file path
    let filePath = path.join(__dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    //Extension of File
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //Check ext and set the content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;

        case '.css':
            contentType = 'text/css';
            break;

        case '.json':
            contentType = 'application/json';
            break;

        case '.png':
            contentType = 'image/png';
            break;

        case '.jpg':
            contentType = 'image/jpg';
            break;


    }

    //Read FIle
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //Page not found
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    }
                )
            }

            else {
                //Some Server Error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }

        else {
            //Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }

    })


});

PORT = process.env.PORT || 5000 //Variable holding the port number
server.listen(PORT, () => console.log(`Server running on port ${PORT}...`))

