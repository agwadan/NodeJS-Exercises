//FILE SYSTEM DEMO

const fs = require('fs');
const path = require('path');

//Creating a new folder
// fs.mkdir(path.join(__dirname, '/test'),{},(err)=>{
//     if(err) throw err;
//     console.log('Folder created...');
// });

//Create and write to a file

fs.writeFile(
    path.join(__dirname, '/test','hello.txt'),'Hello World!',
    err => {
    if (err) throw err;
    console.log('File created and written to...');

    fs.appendFile(
        path.join(__dirname, '/test','hello.txt'),'God is good!',
        err => {
        if (err) throw err;
        console.log('File created and written to...');
        })
})

//Reading a file
fs.readFile(path.join(__dirname, '/test','hello.txt'), 'utf8',(err, data)=>{
    if(err) throw err;
    console.log(data);
})

//Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname,'/test','helloWorld.txt'),
(err)=>{
    if (err) throw err;
    console.log('File renamed');
})