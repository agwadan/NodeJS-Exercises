//URL MODULE

const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); 

//Host (root domain)
console.log(myUrl.host);

//Host name(This doesnt include the port number)
console.log(myUrl.hostname);

//PathName
console.log(myUrl.pathname);

//SERIALIZED QUERY
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add Parameters
myUrl.searchParams.append('abc','123'); 
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`)
});