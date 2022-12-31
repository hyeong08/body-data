const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// extended: false로 옵션을 주면 NodeJs에 기본으로 내장된 querystring모듈을 사용

app.get('/querystring', (req,res) => {
    // const page = req.query.page || 1
    //  || 뜻 or (해석하면 pageㅇㅇ 없으면 1로 가라)
    const id = req.query.id
    res.send('id')
})

app.get("/", (req,res) => {
    res.send('<form action="/" enctype="multiaprt/form-data" method="post"><input name="id"/><button  type="submit">전송</button></form>')
  })

app.post("/", (req,res) => {
    const id = req.body.id
    res.send(id)
})


app.post('/body-multipart', (res,req) => {
    res.send('multipart')
})

app.post('/body-json', (req,res) => {
    // console.log(req.body)
    res.send('json')
})



app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})

