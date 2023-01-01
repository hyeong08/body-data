const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
// extended: false로 옵션을 주면 NodeJs에 기본으로 내장된 querystring모듈을 사용
app.use(express.urlencoded({extended: false}))

// 쿼리스트링으로 데이터 주고 받는다
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


// 데이터를 보낼때 body에 json형식으로 넣고 보냄
app.post('/body-json', (req,res) => {
    const {id, password} = req.body // 객체구조분해할당 적용해봄.
    console.log({id, password})
    // console.log(req.body)
    // res.send({id, password})
    res.send(req.body)
})


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})

