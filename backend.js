const express = require('express')
var cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//feladat_nev lekerdezese
app.get('/feladattabla', (req, res) => {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'feladatokadatb'
  })
  
  connection.connect()
  
  connection.query('SELECT * from feladattabla', (err, rows, fields) => {
    if (err) throw err
  
    console.log('A feladat megnevezése: ', rows[1].feladattabla_nev)
    res.send(rows)
  })
  
  connection.end()
      
  
})

//feladat_leiras lekerdezese
app.get('/feladat_leiras', (req, res) => {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'feladatokadatb'
  })
  
  connection.connect()
  
  connection.query('SELECT * from feladattabla', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[2].feladattabla_leiras)
    res.send(rows)
  })
  
  connection.end()
  
})

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})