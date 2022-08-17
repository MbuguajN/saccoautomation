const express = require('express')
const app = express()
const port = 3002

const bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser
app.use(bodyParser.json())
app.get('/', (req, res,next) => {
  res.send('Hello World!')
})

app.post("/login" , (req, res)=>{
    console.log(req.body)
;})
app.post("/auth/signin" , (req, res)=>{
    console.log(req.body);
    res.status(200).json({status:"success "})
;})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})