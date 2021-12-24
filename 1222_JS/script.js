// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra 
// atsitiktiniai skaičiai nuo 5 iki 25.
console.log("............01...........")

const randNumbers = [];

for(let i=0; i<30; i++){
    randNumbers[i] = Math.floor(Math.random()*21)+5;
}

console.log(randNumbers);

// 2. Naudodamiesi 1 uždavinio masyvu:
// 
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
// c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos 
// reikšmės indeksas;
// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad 
// bendras masyvas padidėtų iki indekso 39;
// f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš 
// neporinių indekso reikšmių, o kitas iš porinių;
// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie 
// didesni už 15;
// h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

// a
console.log("............2a...........")


let biggerThan = 0;
for(let i=0; i<randNumbers.length; i++){
    if(randNumbers[i] > 10){
        biggerThan++;
    }
}
console.log(biggerThan);

// // b
console.log("............2b...........")

let max = -1;

for(let i=0; i<randNumbers.length; i++){
    if(randNumbers[i]>max){
        max = randNumbers[i];
    }
}


//c
console.log("............2c...........")


let even = 0;
for(let i=0; i<randNumbers.length; i++){
    if(randNumbers[i] % 2 === 0){
        even += randNumbers[i];
    }
}
console.log(even);

//d
console.log("............2d...........")


