const express = require('express')

const app = express()
const port = 3000

app.get('/querystring', (req,res) => {
    res.send('querystring')
})

app.post('/body-formdata', (req,res) => {
    res.send('formdata')
})

app.post('/body-multipart', (res,req) => {
    res.send('multipart')
})

app.post('/body-json', (req,res) => {
    res.send('json')
})



app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})

