// console.log('Radhe Krishna ki jyoti alokik tinahu lok me')
// console.log('gate phire hai !!')

// *************
// const myPromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success!');
//     }, 1000);
// })

// myPromis.then(data=>{
//     console.log(data)
// })

// ******** not defined
// console.log(document)
// console.log(window)
// console.log(localStorage)
// console.log(navigator)
// console.log(fetch)


// ******* every created file is a module
// console.log(module)

// ****** data taken from previous file
// const mathmodule = require('./math')
// console.log(mathmodule)

// **1
// const result = mathmodule.add(1,2,3,43,65,4)
// console.log(result) 

// **2
// const {add,multiply} = require('./math')
// const result = multiply(1,2,3,4,2,4)
// console.log(result)


// ************
// const fs = require('fs');
// console.log(fs)


// *** to create a new file
// const fs = require('fs');
// const text = 'this is a test and file was written with node js'
// fs.writeFileSync('temp.txt',text)

// **1
const fs = require('fs');
const text = 'this is a text'

// fs.writeFile('temp.txt', text,(err)=>{
//     if(err) console.log(err)
//     console.log('File created')
// })

const data = fs.readFileSync('temp.txt')
// console.log(data)
console.log(data.toString())