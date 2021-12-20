

// Math.floor() - Apvalina skaiciu i mazaja puse - 4.9 = 4
// Math.round() - Apvalina skaiciu pagal matematines taisykles 4.5 = 5
// Math.ceil() - Aplavina skaiciu i didziaja puse - 4.1 = 5
// &&   - AND (IR) operatorius. Duoda reiksme TRUE, jei abi(!) salygos teisingos
// %    - Isveda skaiciaus liekana
// ||   - OR (ARBA) operatorius. Duoda reiksme TRUE, jei bent viena(!) salyga teisinga







/* 
PIRMA UZD
*/ 
let n = 16;
if(n>=0){
    console.log("Geras");
} 
else if(n = 0){
    console.log("Ivestas nulis");
} 
else{
    console.log("Blogas");
}

/* 
ANTRA UZD
*/ 
let x = 3;
if(x == 1){
    console.log("Eikite");
} 
else if (x == 2){
    console.log("Palaukite");
} 
else if (x == 3){
    console.log("Negalima eiti");
} 
else{
    console.log("Negalima reiksme");
}

/* 
TRECIA UZD
*/ 
let d = 10;
let k = 5;
let y = 1;

let max_k = d*y;

if(k <= max_k){
    console.log("Knygos telpa i dezes");
} 
else{
    console.log("Knygos netilps i dezes");
}

/*
KETVIRTA UZD
*/ 
let number = 3223;
let firstNumber = Math.floor(number / 1000);
let secondNumber = Math.floor(number / 100) % 10;
let thirdNumber = Math.floor(number / 10) % 10;
let fourthNumber = number % 10;

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(thirdNumber);
// console.log(fourthNumber);

if((firstNumber == fourthNumber) && (secondNumber == thirdNumber)){
    console.log("Skaicius yra polindromas");
} 
else{
    console.log("Skaicius nera polindromas");
}

/*
PENKTA UZD
*/ 
let jackpot = 444444;
let one = Math.floor(jackpot / 100000);
let two = Math.floor(jackpot / 10000) % 10;
let three = Math.floor(jackpot / 1000) % 10;
let four = Math.floor(jackpot / 100) % 10;
let five = Math.floor(jackpot / 10) % 10;
let six = jackpot % 10;

let sum = one + two + three + four + five + six;

if(sum % 4 == 0){
    console.log("Laimingas bilietas");
} 
else{
    console.log("Bandykite dar karta");
}

/* 
SESTA UZD
*/ 
let metai = 4;
let lastTwoDigits =  metai % 100;

// console.log(lastTwoDigits);

if((metai % 4 == 0) && lastTwoDigits != 00){
    console.log("Keliamieji metai");
} 
else{
    console.log("Nekeliamieji metai");
}

/* 
SEPTINTA UZD
*/ 
let number2 = 32123;
let firstNum = Math.floor(number2 / 10000);
let secondNum = Math.floor(number2 / 1000) % 10;
let thirdNum = Math.floor(number2 / 100) % 10;
let fourthNum = Math.floor(number2 / 10) % 10;
let fifthNum = number % 10;

// console.log(firstNum);
// console.log(secondNum);
// console.log(thirdNum);
// console.log(fourthNum);
// console.log(fifthNum);

if((firstNum == fifthNum) && (secondNum == fourthNum)){
    console.log("Skaicius yra polindromas");
} 
else{
    console.log("Skaicius nera polindromas");
}

/*
ASTUNTA UZD
*/ 
let kNumber = 4;

if((kNumber == 1) || (kNumber == 3) || (kNumber == 5)){
    console.log("Kambari tvarkys jaunelis");
} 
else if((kNumber == 2) || (kNumber == 4) || (kNumber == 6)){
    console.log("Kambari tvarkys vyresnelis");
}
else{
    console.log("Ivesti reiksme nuo 1 iki 6");
}

/*
DEVINTA UZD
*/
let p1 = 10;
let p2 = 6;
let p3 = 8;

if((p1 > p2) && (p1 > p3)){
    console.log("Pirmas gavo geriausia pazymi");
}
else if((p2 > p1) && (p2 > p3)){
    console.log("Antras gavo geriausia pazymi");
}
else if((p3 > p1) && (p3 > p2)){
    console.log("Trecias gavo geriausia pazymi");
}
else{
    console.log("Nenumatyta situacija");
}

/*
DESIMTA UZD
*/
// let month = 0;

// if(month == 2){
//     console.log("d=28");
// } 
// else if((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)){
//     console.log("d=31");
// }
//  else if((month == 4) || (month == 6) || (month == 9) || (month == 11)){
//      console.log("d=30");
// }
// else{
//     console.log("Iveskite menesio skaiciu nuo 1 iki 12");
// }


// let month = 12;
    
// if((month < 13) && (month > 0)){
//     if(month === 2){
//             console.log("d=28");
//     }
//     else if((month === 4) || (month === 6) || (month === 9) || (month === 11)){
//         console.log("d=30");
//     }
//     else{
//         console.log("d=31");
//     }
// }
// else{
//     console.log("Iveskite menesio skaiciu nuo 1 iki 12");
// }

