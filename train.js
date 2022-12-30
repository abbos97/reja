// ----------------------------------- D-TASK START -----------------------------
const moment = require('moment');
const time = moment().format("HH:mm");
 const chalk = require('chalk');

 


class Shop {
    constructor (non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;

    }

    qoldiq() {
        return `Hozir ${time}da ${this.non} ta non, ${this.lagmon} ta lagmon, ${this.cola} ta cola bor!`
    }

    sotish(string1, son) {
        if(string1 === 'non') {
            if(this.non >= son) {
                this.non -= son;
                console.log(`${son} ta non sotildi. ${this.non} ta non qoldi`)
            } else {
                console.log(chalk.red(`Kechirasiz faqatgina ${this.non} ta non qoldi`))
            }
        } else if(string1 === 'lagmon') {
            if(this.lagmon >= son) {
                this.lagmon -= son;
                console.log(`${son} ta lagmon sotildi. ${this.lagmon} ta lagmon qoldi`)
            } else {
                console.log(chalk.red(`Kechirasiz faqatgina ${this.lagmon} ta lagmon qoldi`))
            }
        } else if(string1 === 'cola') {
            if(this.cola >= son) {
                this.cola -= son;
                console.log(`${son} ta cola sotildi. ${this.cola} ta cola qoldi`)
            } else {
                console.log(chalk.red(`Kechirasiz faqatgina ${this.cola} ta cola qoldi`))
            }
        } else {
            console.log(chalk.red('Iltimos yozganizi tekshirib korin. Qoshish mumkun 1 "non", 2 "lagmon", 3 "cola"'))
        }
    }

    qabul(str, son) {
        if(str === 'non') {
            this.non += son;
           // console.log(`${this.non} ta non qo'shildi`)
        } else if(str === 'lagmon') {
            this.lagmon += son;
            // console.log(`${this.lagmon} ta lagmon qoshildi`)
        } else if(str === 'cola') {
            this.cola += son;
            // console.log(`${this.cola} ta cola qoshildi`)
        } else {
            console.log(chalk.red('Iltimos yozganizi tekshirib korin. Qoshish mumkun 1 "non", 2 "lagmon", 3 "cola"'))
        }
    }

}

 const myShop = new Shop(10, 10, 10);
myShop.qabul('cola', 50);
myShop.sotish('non', 4)
myShop.sotish('non', 2);
const qoldiq = myShop.qoldiq();
 console.log(qoldiq)

 // --------------------    D-TASK END    --------------------------
 