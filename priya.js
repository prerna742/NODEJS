// console.log("helloworld");




// Creating a file
// var fs = require('fs');
//  fs.writeFileSync('./divya.txt','PRERNA CHAUHAN');





//  var fs = require ('fs');
//  var a = fs.readFileSync('./divya.txt','utf-8');
//  console.log(a);












 const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
    res.send('I M PRERNA CHAUHAN')
  })

//   app.get('/about', function (req, res) {
//     res.send('I M FULL STACK WEB DEVELOPER')
//   })


  app.use(function (req, res ,next) {
    next()
  })

  app.get('/contact', function (req, res) {
    res.send('FRESHER')
  })

app.listen(3000)