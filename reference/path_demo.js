const path = require ('path');

//Base file name
console.log(__filename);

 //Directory name
 console.log(path.dirname(__filename));

 //File extension
 console.log(path.extname(__filename));

 //Create path object
 console.log(path.parse(__filename));

 //Create path object for a specific attribute of the object
 console.log(path.parse(__filename).base);


 //Concatenate paths
console.log(path.join(__dirname, 'test','page.html'));
