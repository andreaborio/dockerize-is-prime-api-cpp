# How to check if a number is prime with C++ function in NodeJS 

# Let's start!

**chinaski@chinaski-XPS-15-9550**:**~/Desktop**$ mkdir PrimeCPPNodeJS
**chinaski@chinaski-XPS-15-9550**:**~/Desktop**$ cd PrimeCPPNodeJS/
**chinaski@chinaski-XPS-15-9550**:**~/Desktop/PrimeCPPNodeJS**$ touch isPrime.js
**chinaski@chinaski-XPS-15-9550**:**~/Desktop/PrimeCPPNodeJS**$ sudo touch main.cpp

**In isPrime.js**

    module.exports = (number) => {
        if (typeof number !== 'number') {
        throw new TypeError('argument must be a number!');
        }
        if (number < 2) {
        return false;
      }
        for (let i = 2; i < number; i++) {
	        if (number % i === 0) {
		        return false;
		    }
	   	 }			
       return true;
    };

**In main.cpp**

    #include <nan.h>
    NAN_METHOD(IsPrime) {
    
    if (!info[0]->IsNumber()) {
        Nan::ThrowTypeError("argument must be a number!");
        return;
        }
    int number = (int) info[0]->NumberValue();
  
    if (number < 2) {
       info.GetReturnValue().Set(Nan::False());
       return;
       }
    
    for (int i = 2; i < number; i++) {
        if (number % i == 0) {
	        info.GetReturnValue().Set(Nan::False());
		     return;
        }
     }
    info.GetReturnValue().Set(Nan::True());
    }
    
    NAN_MODULE_INIT(Initialize) {
        NAN_EXPORT(target, IsPrime);
        }
    
    NODE_MODULE(addon, Initialize);

**chinaski@chinaski-XPS-15-9550**:**~/Desktop/PrimeCPPNodeJS**$ npm init
**chinaski@chinaski-XPS-15-9550**:**~/Desktop/PrimeCPPNodeJS**$ sudo npm install nan node-gyp --save


**Now update your package.json**

    {
        "name": "primecppnodejs",
        "version": "1.0.0",
        "description": "Check if a number is prime with a c++ function using NodeJS and a little bit of magic",
        "main": "server.js",
        "scripts": {
	        "compile": "node-gyp rebuild",
	        "start": "node main.js"
        },
        "author": "Andrea Borio",
        "license": "SEE LICENSE IN LICENSE",
        "keywords": [],
        "dependencies": {
	        "nan": "^2.11.0",
	        "node-gyp": "^3.8.0"
	        },
        "gypfile": true
        }
        
**Now create binding file**

**chinaski@chinaski-XPS-15-9550**:**~/Desktop/PrimeCPPNodeJS**$ touch binding.gyp

binding.gyp

       {
        "targets": [
	        {
			        "include_dirs": [
				        "<!(node -e \"require('nan')\")"
				     ],
		        "target_name": "addon",
		        "sources": [ "main.cpp" ]
	        }
	      ]
      }
Now make sure to have installed on your system

 - make
 - g++
 - python 2.7
 
 
 
And run 
