const fs = require('fs')
const a = 100;

setImmediate( ()=>console.log("setImmediate"))

fs.readFile("./file.txt","utf8",()=>{
    console.log("file Reading CB")
})

setTimeout( ()=>console.log("Timer Expired"),0)

function printA(){
    console.log("a: ", a)
}

printA()

console.log("last line of the file.")


// Output:
// a:  100
// last line of the file.
// Timer Expired
// setImmediate
// file Reading CB

// explanation : 
// printA() and console.log("last line of the file.") run immediately.
// setTimeout(..., 0) is queued and executed in the next event loop iteration.

// Normally, callbacks for I/O operations like fs.readFile would run here.
// However, if the I/O operation is not yet complete (e.g., reading a file takes time), the event loop does not have the callback ready to execute in this phase.
// Check Phase:

// setImmediate(...) is always executed in the check phase, which follows the poll phase. This means it will execute after the poll phase is done, even if there are no I/O callbacks ready to be executed.

// The fs.readFile callback runs last because it's dependent on the completion of the I/O operation.
