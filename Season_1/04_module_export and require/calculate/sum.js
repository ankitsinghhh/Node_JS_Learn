
console.log("sum module being executed")

var x = "sum module hai ye "

function calcsum(a,b){
    const sum = a+b;
    console.log(sum)
}

// es6/mjs pattern to export
// export function calcsum(a,b){
//     const sum = a+b;
//     console.log(sum)
    
// }

// cjs pattern to export variables and functions
// // module.exports = calcsum

module.exports = {
    x:x,
    calcsum: calcsum
}

// what is module.exports 
// console.log(module.exports) => it gives an empty object 

// another way to write exports 
// module.exports.x= x;
// module.exports.calcsum = calcsum; 