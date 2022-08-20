const express = require('express')
const app = express()
const port = 3002
const mysql = require('mysql')

const bodyParser = require('body-parser');

const cors = require('cors')


// create application/x-www-form-urlencoded parser
app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
  user: "superuser",
  host: "localhost",
  password: "sekiro",
  database: "sacco"
})

app.get('/', (req, res,next) => {
  res.send('Hello World!')
})

app.post("/login" , (req, res)=>{
    console.log(req.body)
;})
app.post("/signin" , (req, res)=>{

  const username = req.body.username
  const email = req.body.email
  const idNumber = req.body.idNumber
  const homeAddress = req.body.homeAddress
  const workAddress = req.body.workAddress
  const mobileNumber = req.body.mobileNumber
  const password = req.body.password


  const sqlInsert =
  "INSERT INTO User(username,email,idNumber,homeaddress,workAddress,mobileNumber, password) VALUES (?,?,?,?,?,?,?) ";

  db.query(
    sqlInsert,
    [username,email,idNumber,homeAddress,workAddress,mobileNumber,password],
  )
    // eslint-disable-next-line no-undef
     
    console.log(req.body);
    res.status(200).json({status:"success "})
;})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})