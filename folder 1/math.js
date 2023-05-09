const add = (...rest)=> rest.reduce((acc, val)=> acc + val, 0)
const multiply = (...rest)=> rest.reduce((acc, val)=> acc * val, 1)
// console.log(module.exports)

// module.exports={
//     add,
//     multiply,
//     something: 'else',
//     age: 22
// }
// console.log(module)

// to exprt
module.exports=[1,2,5]

console.log('this is a log from math modules')


