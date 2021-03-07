//Uncomment each section to run the code


/* SECTION1 the File System
const fs = require("fs")
var path = './AFolder';
fs.mkdir(path,(err)=>{if(err!=null)console.log(err)});
*/

//SECTION2 Http server
/*require("http").createServer((inRequest, inResponse) => {
  inResponse.end("Hello from my first Node Web server");
}).listen(80); */

/*
var http = require('https');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'www.random.org',
  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};

callback = (inResponse)=>{
    console.log(`STATUS: ${inResponse.statusCode}`)
  var str = '';

  //another chunk of data has been received, so append it to `str`
  inResponse.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  inResponse.on('end', function () {
    console.log("Hola",str);
  });
}

http.request(options, callback).end();
*/
/*
const os  = require("os")
console.log(os.cpus())
*/


const path = require("path")
const os = require("os")
const url = require("url")
const querystring = require('querystring')
 

os.homedir()
//console.log(os.cpus())
//console.log(path.basename("/hello/hellos"))
//console.log(process.uptime(), process.env )

let parsedURL = url.parse("http://mysite.com/?account=36764&add=125");
let parsedParams = querystring.parse(parsedURL.query);

console.log(parsedParams)
