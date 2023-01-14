// ====================== I-task ========================

function getPositive(num) {
    return num.filter(n => n > 0)
}
console.log(getPositive([0, -15, 5, -3, 2, -8, 9, -11]))

// ====================== I-task end ========================






// ======================= H-task ======================

// function reverseString(a) {
//     return a.split("").reverse().join("")
// }
// console.log(reverseString("javascript"))

//======================= end H-task =======================



// ============================= G-TASK ========================

// function findBig(a) {
//     let bigNum = Math.max(...a)
//     let index = a.indexOf(bigNum)
//     return index
    
// }

// const javob = findBig([1,11,12,4,3,12]);
// console.log(javob)



// console.log("=====================10-dars========================")
// 'sync' ni 'async' ozgartirish  ====>

// console.log("Jack Ma maslahatlari");


// const list = [
//     "Yaxshi talaba boling",//0-20
//     "Togri boshliq tanlang va koproq hato qiling",//20-30
//     "Ozingizga ishlashni boshlang", //30-40
//     "Siz kuchli bogan ishlarni qiling", //50-60
//     "Yoshlarga investitsiya qiling",
//     "Endi kechov, dam oling!" // 60
//]

// =================== Definition qismi async va callback ======================

// ********************** callback bilan promise farqi ****************************
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("Insert number", null);
//     else if(a <= 20 ) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(() => {
//             callback(null, list[5]);
//         }, 1000)
//         // return new Promise((resolve, reject) => {
//         //     setInterval(() => {
//         //         resolve(list[5])
//         //     },2000)
           
//         // })

//     }
// }
// maslahatBering(75, (err, data) => {
//     if(err) console.log("Error", err);
//     else {
//         console.log(data)
//     }
// })




//  async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("Insert number");
//     else if(a <= 20 ) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5])
//             },2000)
           
//         })

//     }
// }


// ========================== ASYNC CALL TURLARI ==============================

// ****************** async/await orqali call qilish ************************

// async function run() {
//     let javob = await maslahatBering(70);
//     console.log(javob)
    //  javob = await maslahatBering(30);
    // console.log(javob)
    //  javob = await maslahatBering(27);
    // console.log(javob)
    //  javob = await maslahatBering(50);
    // console.log(javob)
// }
// run()

//****************** then/catch orqali call qilish *******************
// console.log("1")
// maslahatBering(21).then(data => {
//     console.log("Javob:", data)
// }).catch(err => {
//     console.log("ERROR:", err)
// })
// console.log("2")



//****************Promise hell call qilish ***************************

// console.log("1")
// maslahatBering(21).then(data => {
//     maslahatBering(31).then(data => {
//         maslahatBering(41).then(data => {
//             console.log("Javob:", data)
//         }).catch(err => {
//             console.log("ERROR:", err)
//         })
//         console.log("Javob:", data)
//     }).catch(err => {
//         console.log("ERROR:", err)
//     })
//     console.log("Javob:", data)
// }).catch(err => {
//     console.log("ERROR:", err)
// })
// console.log("2")





// console.log("=====================9-dars========================")

// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba boling",//0-20
//     "Togri boshliq tanlang va koproq hato qiling",//20-30
//     "Ozingizga ishlashni boshlang", //30-40
//     "Siz kuchli bogan ishlarni qiling", //50-60
//     "Yoshlarga investitsiya qiling",
//     "Endi kechov, dam oling!" // 60
// ]



// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("Insert number", null);
//     else if(a <= 20 ) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(()=>{
//             callback(null, list[5]);
//         },0)
//     }
// }


// maslahatBering(21, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
// })

// ---------------- F-task start --------------------
// console.log("================F-task===================")
// function findDoubler(a) {
//     const aSplit = a.split("");
//     const javob = aSplit.map((e, i, a) => {
//         return a[i] === a[i + 1]
//     })   
//     return javob.includes(true)
// }
//  const res = findDoubler("helo how arre you");
// console.log(res)
 




    

      

      


// ---------------- F-task end --------------------

// ----------------------------------- D-TASK START -----------------------------
// const moment = require('moment');
// const time = moment().format("HH:mm");
//  const chalk = require('chalk');

 


// class Shop {
//     constructor (non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;

//     }

//     qoldiq() {
//         return `Hozir ${time}da ${this.non} ta non, ${this.lagmon} ta lagmon, ${this.cola} ta cola bor!`
//     }

//     sotish(string1, son) {
//         if(string1 === 'non') {
//             if(this.non >= son) {
//                 this.non -= son;
//                 console.log(`${son} ta non sotildi. ${this.non} ta non qoldi`)
//             } else {
//                 console.log(chalk.red(`Kechirasiz faqatgina ${this.non} ta non qoldi`))
//             }
//         } else if(string1 === 'lagmon') {
//             if(this.lagmon >= son) {
//                 this.lagmon -= son;
//                 console.log(`${son} ta lagmon sotildi. ${this.lagmon} ta lagmon qoldi`)
//             } else {
//                 console.log(chalk.red(`Kechirasiz faqatgina ${this.lagmon} ta lagmon qoldi`))
//             }
//         } else if(string1 === 'cola') {
//             if(this.cola >= son) {
//                 this.cola -= son;
//                 console.log(`${son} ta cola sotildi. ${this.cola} ta cola qoldi`)
//             } else {
//                 console.log(chalk.red(`Kechirasiz faqatgina ${this.cola} ta cola qoldi`))
//             }
//         } else {
//             console.log(chalk.red('Iltimos yozganizi tekshirib korin. Qoshish mumkun 1 "non", 2 "lagmon", 3 "cola"'))
//         }
//     }

//     qabul(str, son) {
//         if(str === 'non') {
//             this.non += son;
//            // console.log(`${this.non} ta non qo'shildi`)
//         } else if(str === 'lagmon') {
//             this.lagmon += son;
//             // console.log(`${this.lagmon} ta lagmon qoshildi`)
//         } else if(str === 'cola') {
//             this.cola += son;
//             // console.log(`${this.cola} ta cola qoshildi`)
//         } else {
//             console.log(chalk.red('Iltimos yozganizi tekshirib korin. Qoshish mumkun 1 "non", 2 "lagmon", 3 "cola"'))
//         }
//     }

// }

//  const myShop = new Shop(10, 10, 10);
// myShop.qabul('cola', 50);
// myShop.sotish('non', 4)
// myShop.sotish('non', 2);
// const qoldiq = myShop.qoldiq();
//  console.log(qoldiq)

 // --------------------    D-TASK END    --------------------------
 

 
 // --------------------    E-TASK START  --------------------------

//  function calculate(num1, str, num2) {
//     if(num1 !== undefined && num2 !== undefined && num1 !== null && num2 !== null && num1 !== 0 ) {
//         switch(str) {
//             case '+':
//                 return num1 + num2;
//             break;
//             case '-':
//                 return num1 - num2;
//                 break;
//             case '*':
//                 return num1 * num2;
//                 break;
//             case '/':
//                 return num1 / num2;
//         }
//     } else {
//         return 'Not valid to operate'
//     }
// }
// const j = calculate(12, '*', 0);
// console.log(j)



//  -----------------     E-TASK END   --------------------