const fs = require('fs')
const a = 100;

setImmediate(() => console.log("setImmediate"))

Promise.resolve().then(() => console.log("Promise"))

fs.readFile("./file.txt", "utf8", () => {
    console.log("file Reading CB")
})

setTimeout(() => console.log("Timer Expired"), 0)

process.nextTick(() => console.log("process.nextTick"))

function printA() {
    console.log("a: ", a)
}

printA()

console.log("last line of the file.")

/* Output:
a:  100
last line of the file.
process.nextTick
Promise
Timer Expired
setImmediate
file Reading CB
*/

// Explanation:
// 1. Synchronous code runs first.
// 2. `process.nextTick` executes before the event loop continues.
// 3. Promises are resolved in the microtask queue after the current operation.
// 4. `setTimeout` runs in the next event loop's timers phase.
// 5. `setImmediate` runs after the poll phase in the check phase.
// 6. `fs.readFile` callback runs after the I/O operation completes.
