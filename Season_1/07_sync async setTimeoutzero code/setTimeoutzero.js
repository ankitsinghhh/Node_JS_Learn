console.log("hello world")

var a = 1078698;
var b =  20986;

setTimeout(()=>{
    console.log("call me asap")
},0) // trust issue with setTimeout
// it will only be called when the call stack of main thread is empty

// reason:
// since the code for setTimeoutzero is offloaded to libuv , then the callback function can only be executed by js engine's callstack only when the callstack is empty that is all synchronous code ( that is global execution context is out of callstack) has been executed , hence call me asap is printed after the multiplication result even if the time was 0 milliseconds

setTimeout(()=>{
    console.log("call me after 3s")
},3000)

function multiplyFn(a,b){
    const result = a * b
    return result
}

var c = multiplyFn(a,b)

console.log("multiplication result",c)

