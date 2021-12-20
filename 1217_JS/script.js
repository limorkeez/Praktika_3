console.log("-----------1----------");
// 1. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for(let i=0; i<5; i++ ){
    console.log("Labas"+i);
}


console.log("-----------2----------");
// 2. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje 
//     eilutėje);

for(let i=0; i<5; i++){
    console.log(i);
}


console.log("-----------3----------");
// 3. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius 
//     vienoje eilutėje);

for(let i=0; i<41; i=i+10){
    console.log(i);
}


console.log("-----------4----------");
// 4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius 
//     vienoje eilutėje);

for(let i=49; i<54; i++){
    console.log(i);
}


console.log("------------5---------");
// 5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje 
//     eilutėje);

for(let i=4; i>=0; i--){
    console.log(i);
}


console.log("------------6---------");
// 6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje);

for(let i=0; i<5; i++){
    let number = Math.floor(Math.random()*11);
    console.log(number);
}


console.log("-------------7--------");
// 7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
//     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let seventh;
while(seventh != 5){
    seventh = Math.floor(Math.random()*11);
    console.log(seventh);
}




console.log("------------8---------");
// 8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius 
//     vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let sum = 0;
while(sum < 100){
    sum += Math.floor(Math.random()*11);
}
console.log("Atsitiktinių skaičių suma: "+sum);


console.log("------------9---------");
// 9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
//     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek 
//     ciklų prasisuko;

let randNum;
let cycle = 0;
while((randNum != 5) && (randNum != 7)){
    randNum = Math.floor(Math.random()*11);
    console.log(randNum);
    cycle += 1;
}
console.log("Prasisuko ciklų: "+cycle);


console.log("------------10---------");
// 10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n 
// centimetrus coliais ir atvirkščiai.


function converter(){

    let n = 10;
    let inch = 2.54;

    // Vertimas is coliu i centimetrus
    for(let i=1; i<=n; i++){
        console.log(i+"inch = "+(i*inch)+"cm")
    }

    // Vertimas is centimetru i colius
    for(let i=1; i<=n; i++){
        console.log(i+"cm = "+(i/inch)+"inch")
    }
}

converter();

console.log("------------11---------");
// 11. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
// kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
// indėlį.

function bankSt(){
    let deposit = 100;
    let interest = 0.02;
    let years = 10;

    for(let i=1; i<=years; i++){
        deposit += deposit*interest;
        
        console.log(i+" | "+deposit+" | "+interest);
    }
}

bankSt();

// 12. . Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei 
// tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už 
// duotąjį, raskite tą skaičių.

