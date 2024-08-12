const crypto = require('crypto')

var a=5;
var b =10;

console.log("hello world")

//synchronous password based key derivation function - it will block the main thread - do not use it 
const pwd = crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")  // sync function doesnt have callback, it will wait till key is generated and block execution of the whole code( which is below it )
console.log("first key is generated")



//password based key derivation - async function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("second key is generated")
}) // salt is for encryption, 500000 is iteration - proportional to how strong you want your password, 50 -it is no. of key length, sha512-digest-it means which algorithm you want to use

function multiplyFn(a,b){
    return a*b
}

var c = multiplyFn(a,b)

console.log("mulitplication result:",c)