// console.log("Radha")

const express = require('express')
const fs = require('fs')

const PORT = 8080

const app = express()

app.get('/',(req, res)=>{
    // console.log(req.headers)
    // console.log(req.path)
    // console.log('Radhe Krishna')

    // res.send('First respnse from express server').status(200)
    // res.status(404).send('First respnse from express server  !!')
    // res.status(500).send('First respnse from express server  !!')
    res.status(200).send('First respnse from express server  !!')
})

app.get('/todos',(req,res)=>{
    fs.readFile('./db.js','utf-8',(err,data)=>{
        if (err) {
            console.log(err)
        }
        // textual response on browser showing
        // res.status(200).send(data)

        // JSON resonse on browser showing
        // res.status(200).send({
        //     ...JSON.parse(data)
        // })

        // this is the real code
        res.status(200).json(
            JSON.parse(data)
        )      
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
