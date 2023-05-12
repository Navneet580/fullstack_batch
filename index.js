
// const {v4: uuidv4} = require('uuid');
// const fetch = require('node-fetch')

// // console.log(fetch)

// const id = uuidv4();
// console.log(id)

// const fetchData = async()=>{
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

// *****
// console.log('radhe')

// for (let i=0; i<10; i++) {
//     console.log(i)
// }

// *******

const http = require('http');
const fs = require('fs')

const PORT = 8080

http.createServer(async function (req, res) {
    await new Promise((resolve, reject) => {
        fs.readFile('index.html', function(err, data) {
            if(err) reject(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        resolve();
    });
    })
}).listen(PORT); 