// Module package CORE
// Module package EXTERNAL--------------------------------------------------------
// setTimeout(function () {
//     console.log("ishga tushdi")
// }, 5000)
// let a = 0;
// setInterval(function () {
//     console.log("ishga tushdi", a)
//     a++
// }, 1000)

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log('--------------------------')

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Abbos`)
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);



//===================================================
//Module package EXTERNAL
//-----------------------------
// const moment = require("moment");
// const time = moment().format();
// // console.log(time)
//-------------------------------
// setInterval(() => {
//     console.log(`hozirgi vaqt:${time}`)
// },5000)
//----------------------------
// const inquirer = require("inquirer");
// inquirer.prompt([{type: "input", name: "raqam", message: "raqamni kiriting!"}]).then((answer) => {
//     console.log('Man kiritgan raqam:', answer.raqam);
// })
// .catch((err) => console.log(err));
//-----------------------------
//const validator = require('validator');
// const test = validator.isEmail('abbo@sb.arcom');
// console.log(test);
// const test2 = validator.isInt("df");
// console.log(test2);
// const test3 = validator.isIP("39.7.46.6s");
// console.log(test3)
//  const {v4: uuidv4} = require('uuid');
// const random = uuidv4();
// console.log(random);

// const chalk = require('chalk');
// console.log(chalk.blue("hello") + " " + chalk.red`${random}` + " " + chalk.yellow("bu sariq"))








//============================================
//Module package FILE

// const calculate = require('./hisob');

// const javob = calculate.ayrish(10, 1);
// console.log(javob)
// const javob2 = calculate.qoshish(10, 10);
// console.log(javob2)
// const javob3 = calculate.bolish(10, 2);
// console.log(javob3)
// const javob4 = calculate.kopaytirish(10, 5);
// console.log(javob4)
// console.log(require("module").wrapper)
// console.log(arguments)
// const Account = require('./account')
// Account.tartib()
// Account.tellMeTime()
//  const myAccount = new Account("Abbos", 500000, 9706125260023);
// Account.tellMeAboutClass()
// myAccount.giveMeDetails()

// myAccount.makeDeposit(10000);
// myAccount.withdrawMoney(200000);
// myAccount.makeDeposit(5000000);
// myAccount.withdrawMoney(500000);



// ----------- 6-dars  Express Framework Va Bu Framework Orqali Web Server Quramiz --------


// console.log("Web Serverni boshladik");
// const express = require("express");
// const app = express();
// const http = require("http");
// const express = require("express");
// const app = express();
// const http = require("http")

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// 2 Session

//3 views code
// app.set("views", "views");
// app.set("views engine", "ejs");


// app.get("/", function(req, res) {
//     res.end("Hammaga salom");
// });

// const server = http.createServer(app);
// console.log(server)
// //1
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// //2 Session

// //3 Views code
// app.set("views", "views");
// app.set("view engine", "ejs");


// //4 Routing cude
// app.get("/", function(req, res) {
//     res.end("Hammaga salom");
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`THe server is running successfully on port: ${PORT}`);
// });



//  ==========================    [07] EJS Framework Orqali Ananaviy Frontend Quramiz  =============

console.log('Web server boshlandi');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');


//1. Kirish

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2. Session code
//3. Views code 
app.set('views', 'views');
app.set('view engine', 'ejs');

//4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"})
})
app.get("/", function(req, res) {
    res.render("harid");
})

const server = http.createServer(app);
let PORT = 8080;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
})

