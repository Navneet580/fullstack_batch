// console.log("Radha")

const express = require('express')
const fs = require('fs')

const PORT = 8080

const app = express()

// DAY-2nd - 3rd topic => middleware in express js

// ##1
// const logsUserIp = (req,res,next)=>{
//     console.log('middleware function ran')
//     next()
// } 
// app.use(logsUserIp)

// ##2
// const logUserAgent = (req,res,next)=>{
//     const agent = req.headers
//     ['user-agent']
//     console.log(agent)
//     next()
// } 
// app.use(logUserAgent)

// ##3
const logUserAgent = (req,res,next)=>{
    const agent = req.headers
    ['user-agent']
    if(agent.includes('Chrome'))
    return res.status(403).send("Unauthorised")
    next()
} 

const logger = (req,res,next)=>{
    console.log(`Request method: ${req.method} and request path: ${req.path}`)
    next()
}

app.use(logUserAgent)
app.use(logger)


// DAY -1st => 1st topic
app.get('/',(req, res)=>{
    res.status(200).send('First respnse from express server  !!')
})

//  Params DAY-2nd => 3rd topic
// **1
// app.get('/name/:username', (req, res) => {
//     console.log(req.params)
//     const {username} = req.params
//     res.status(200).send(`My name is ${username}`)
// })

// **3
app.get('/product/:name', (req, res) => {
    const {name} = req.params
    res.status(200).send(`My name is ${name}`)
})

//**2 
// app.get('/product/:name', (req, res) => {
//     switch (req.params.name) {
//         case 'mac':
//             // fetch mac data
//             res.send
//     }

//     console.log(req.params)
//     res.status(200).send(`My name is ${username}`)
// })


//  *** Query DAY-1st and DAY-2nd  => 2nd topic
app.get('/todos',(req,res)=>{
    // console.log({
    //     headers:req.headers,
    //     body:req.body,
    //     params:req.params,
    //     query:req.query
    // })

    const {count} = req.query
    if (count) {
        fs.readFile('./db.js','utf-8',(err,data)=>{
            if (err) {
                console.log(err)
            }
            res.status(200).json(
                JSON.parse(data).slice(0,count)
            )      
        })
    }else {
        fs.readFile('./db.js','utf-8',(err,data)=>{
            if (err) {
                console.log(err)
            }
            res.status(200).json(
                JSON.parse(data)
            )      
        })
    }

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
