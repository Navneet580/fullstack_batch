
// ***to create file
// const fs = require('fs');
// const text = 'console.log(first)'
// fs.writeFileSync('math.js',text)

// ***
// const mathmodule = require('./math')
// console.log(mathmodule)

// ** require() calls the data from other file
// console.log(require('./math'))

// **
// const math = require('./math')
// console.log(math.add(1,2,33,44,4))
// console.log(math.multiply(2,2,6))

// **
// const math = require('./math')
// console.log(math)

// *** to create a new file
// const fs = require('fs');
// const text = 'this is a test and file was written with node js'
// fs.writeFileSync('temp.txt',text)


// ****
// const fs = require('fs')

// fs.writeFileSync('.newFile.txt', "this is a 0123456789", (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File Created')
// })

// **
// const fs = require('fs')

// fs.readFile('./temp.txt', 'utf-8',(err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// **
// const fs = require('fs')

// const data = fs.readFileSync('./temp.txt', 'utf-8')
// // console.log(data.toString())
// console.log(data)


// ************
// let i=0

// while (i<20) {
//     console.log(++i)
// }

// ************
console.log(Array.from(5).fill(1))