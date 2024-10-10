const http = require('http');

//Creating a server object
http.createServer((req, res) => {
    //Write respose after receiving a request

    res.write('Hello World');
    res.end();
}).listen(5000, ()=>console.log('Server running...'))//Port number