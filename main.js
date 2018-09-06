const {IsPrime} = require('./build/Release/addon'); // native c++
const isPrime = require('./isPrime.js'); // js

var number = 654188429; // thirty-fifth million first prime number (see https://primes.utm.edu/lists/small/millions/)
const NATIVE = 'native';
const JS = 'js';

var express = require('express')
var app = express()
var bodyParser=require('body-parser');
app.use(bodyParser.json({ limit : "50mb"}))
app.post('/', function (req, res) {
    var ris;
    number=req.body.number;
    ris+=`${NATIVE}: checking whether ${number} is prime... ${IsPrime(number)}` + "\n\r"
    ris+=`${JS}: checking whether ${number} is prime... ${isPrime(number)}` + "\n\r"
console.time(NATIVE);
var nativtime=Date.now();
console.log(`${NATIVE}: checking whether ${number} is prime... ${IsPrime(number)}`);
console.timeEnd(NATIVE);
nativtime=Date.now()-nativtime
console.log('');
console.time(JS);
var jstime=Date.now();

console.log(`${JS}: checking whether ${number} is prime... ${isPrime(number)}`);
console.timeEnd(JS);
jstime=Date.now()-jstime
  res.send(ris+"native time "+nativtime+ " jstime "+jstime)
})

app.listen(8000, function () {
  console.log('server listening on port 8000!')
})