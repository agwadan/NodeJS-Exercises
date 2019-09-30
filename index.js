const Automobile = require('./automobile');

const car1 = new Automobile('Dodge Demon' , 700);
const car2 = new Automobile('Ford Mustang RTR', 680);

car1.testing();
car2.testing();

//We also have access to the directory path and the file name as show below
console.log(__dirname, __filename)