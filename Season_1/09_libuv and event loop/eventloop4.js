const fs = require('fs')

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("setTimeout"), 0)

Promise.resolve().then(() => console.log("Promise"))

fs.readFile("./gossip.txt", "utf8", () => {
    console.log("File Reading CB")
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"))
    console.log("nextTick")
})

console.log("Last line of the file")

/* Output:
Last line of the file
nextTick
inner nextTick
Promise
setTimeout
setImmediate
File Reading CB
*/

// Explanation:
// 1. Synchronous code executes first, logging "Last line of the file".
// 2. `process.nextTick` runs after the current operation, logs "nextTick" and schedules "inner nextTick".
// 3. "inner nextTick" runs next due to the nested `process.nextTick`.
// 4. `Promise.resolve` runs after all `nextTick` callbacks in the microtask queue.
// 5. `setTimeout` runs in the next event loop's timers phase.
// 6. `setImmediate` runs in the check phase after the poll phase.
// 7. `fs.readFile` callback logs "File Reading CB" after the file operation completes.
