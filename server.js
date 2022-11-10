const express = require('express')
const app = express()
const port = 3002
const mysql = require('mysql')
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const cors = require('cors');

const bcrypt = require('bcrypt');
const { PrismaClientRustPanicError } = require('@prisma/client/runtime');
const saltRounds = 10

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json())
app.use(cors({
  origin: ["htttp://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}))

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))


const db = mysql.createConnection({
  user: "superuser",
  host: "localhost",
  password: "sekiro",
  database: "sacco"
})
app.get('/', (req, res, next) => {
  res.send('server is active');
})
app.post("/userdata", (req, res) => {
  const tokenDecrypted = jwt.decode(req.body.token);
  const username = tokenDecrypted.split(" ")[0];
  //const password = tokenDecrypted.split(" ")[1];
  
  db.query("SELECT * FROM User WHERE username = ?", username, (err, result, fields) => {
    if (result.length === 0) {
      res.status(200).json({ status: "user not found" });
    } else {
      res.status(200).json({ result });
    }
  })
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM User WHERE username = ?",
    username, (err, result, fields) => {
      if (err) throw err
      if (result.length === 0) {
        res.status(200).json({ status: "user not found" })
        console.log(result);
      } else {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            //console.log(req.session.user)
            const token = jwt.sign(`${username} ${password}`, "sacco")
            res
              .status(200).json({ status: "success", token: token })
          } else {
            res.status(200).json({ status: "incorrect username or password" })
          }
        })
      }
    }
  );
});

app.post("/signin", (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const idNumber = req.body.idNumber
  const homeAddress = req.body.homeAddress
  const workAddress = req.body.workAddress
  const mobileNumber = req.body.mobileNumber
  const password = req.body.password
  bcrypt.hash(password, saltRounds, (err, hash) => {

    if (err) {
      console.log(err)
    }

    const sqlInsert =
      "INSERT INTO User(username,email,idNumber,homeaddress,workAddress,mobileNumber, password) VALUES (?,?,?,?,?,?,?) ";
    db.query(
      sqlInsert,
      [username, email, idNumber, homeAddress, workAddress, mobileNumber, hash],
    )
    // eslint-disable-next-line no-undef

    console.log(req.body);
    const token = jwt.sign(`${username} ${password}`, "sacco")
    res
      .status(200).json({ status: "success", token: token })
  })

})

app.post("/update-balance", (req,res) => {
  const balance  = req.body.balance;
  console.log(balance)
  const tokenDecrypted = jwt.decode(req.body.token);
  const username = tokenDecrypted.split(" ")[0];
  const sqlInsert =  `UPDATE user SET Balance = '${balance}' WHERE username = '${username}'`;
  db.query(
    sqlInsert,(err,results,field)=>{
      if (err) throw err;
      console.log(results);
      res.status(200).json({ status: "success" });

    }
  )

})

app.get("/guarantors" , (req,res) =>{
  
  db.query("SELECT * FROM User", (err,results) => {
    console.log(results)
    res.status(200).json({ results})
  })


  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})