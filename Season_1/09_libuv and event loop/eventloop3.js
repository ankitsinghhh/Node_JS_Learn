const fs = require('fs')

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timer Expired"), 0)

Promise.resolve().then(() => console.log("Promise"))

fs.readFile('./file.txt', 'utf8', () => {

    setTimeout(() => console.log("2nd Timer"), 0)

    process.nextTick(() => console.log("2nd nextTick"))

    setImmediate(() => console.log("2nd setImmediate"))
    
    console.log("File reading CB")
})

process.nextTick(() => console.log("nextTick"))

console.log("Last line of the file")

/* Output:
Last line of the file
nextTick
Promise
Timer Expired
setImmediate
File reading CB
2nd nextTick
2nd setImmediate
2nd Timer
*/

// Explanation:
// 1. Synchronous code executes first, logging "Last line of the file".
// 2. `process.nextTick` runs immediately after synchronous code.
// 3. `Promise.resolve` runs in the microtask queue, after `nextTick`.
// 4. `setTimeout` runs in the next event loop's timers phase.
// 5. `setImmediate` runs in the check phase after the poll phase.
// 6. `fs.readFile` callback logs "File reading CB" and schedules more tasks.
// 7. Within `fs.readFile` callback, `process.nextTick` runs first, then `setImmediate`, followed by the second `setTimeout`.

// Poll Phase (Handling I/O):

// The fs.readFile operation completes, and its callback is executed.
// Within the callback:
// The second setTimeout is scheduled to run in the next timers phase.
// process.nextTick is queued to run immediately after the callback.
// setImmediate is scheduled to run in the next check phase.
// The callback logs "File reading CB".
// Then, the next tick (2nd nextTick) runs, followed by the immediate (2nd setImmediate).

// Timers Phase (Again):
// Finally, the second setTimeout callback (2nd Timer) runs.
