// console.log("-----------1----------");
// // 1. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

// for(let i=0; i<5; i++ ){
//     console.log("Labas"+i);
// }


// console.log("-----------2----------");
// // 2. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje 
// //     eilutėje);

// for(let i=0; i<5; i++){
//     console.log(i);
// }


// console.log("-----------3----------");
// // 3. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius 
// //     vienoje eilutėje);

// for(let i=0; i<41; i=i+10){
//     console.log(i);
// }


// console.log("-----------4----------");
// // 4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius 
// //     vienoje eilutėje);

// for(let i=49; i<54; i++){
//     console.log(i);
// }


// console.log("------------5---------");
// // 5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje 
// //     eilutėje);

// for(let i=4; i>=0; i--){
//     console.log(i);
// }


// console.log("------------6---------");
// // 6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// // (vienas skaičius vienoje eilutėje);

// for(let i=0; i<5; i++){
//     let number = Math.floor(Math.random()*11);
//     console.log(number);
// }


// console.log("-------------7--------");
// // 7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
// //     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

// let seventh;
// while(seventh != 5){
//     seventh = Math.floor(Math.random()*11);
//     console.log(seventh);
// }




// console.log("------------8---------");
// // 8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius 
// //     vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

// let sum = 0;
// while(sum <= 100){
//     sum += Math.floor(Math.random()*11);
// }
// console.log("Atsitiktinių skaičių suma: "+sum);


// console.log("------------9---------");
// // 9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
// //     vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek 
// //     ciklų prasisuko;

// let randNum;
// let cycle = 0;
// while(randNum != 5 && randNum != 7){
//     randNum = Math.floor(Math.random()*11);
//     console.log(randNum);
//     cycle += 1;
// }
// console.log("Prasisuko ciklų: "+cycle);


// console.log("------------10---------");
// // 10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n 
// // centimetrus coliais ir atvirkščiai.


// function converter(){

//     let n = 10;
//     let inch = 2.54;

//     // Vertimas is coliu i centimetrus
//     for(let i=1; i<=n; i++){
//         console.log(i+"inch = "+(i*inch)+"cm")
//     }

//     // Vertimas is centimetru i colius
//     for(let i=1; i<=n; i++){
//         console.log(i+"cm = "+(i/inch)+"inch")
//     }
// }

// converter();

// console.log("------------11---------");
// // 11. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
// // kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
// // indėlį.

// function bankSt(){
//     let deposit = 100;
//     let interestRate = 0.02;
//     let interestSum = 0;
//     let years = 10;

//     for(let i=1; i<=years; i++){
//         let interestAmount = deposit*interestRate;
//         deposit += interestAmount;
//         interestSum += interestAmount;
//         console.log(i+" metai | "+ interestSum +" | "+ deposit);
//     }
// }

// bankSt();

// console.log("------------12---------");
// // 12. . Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei 
// // tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už 
// // duotąjį, raskite tą skaičių.

// function dvylika(){
//     for(let i=10; i<100; i++){
//         let first = Math.floor(i / 10);
//         let second = i % 10;

//         if( (first/second === 3) && ((second*10+first)+36 === i) ){
//             console.log(i);
//         }
//     }
// }

// dvylika();

// console.log("------------13---------");
// // 13. Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina 
// // iš 998 ?

// function trylikta(){
//     for(let i=1000; i<=9999; i++){
//         if(((Math.floor(i / 1000)) % 2 === 0) && (i % 998 !== 0)){
//             console.log(i);
//         }
//     }
// } 

// // trylikta();

// console.log("------------14---------");
// // 14. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra 
// // keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 
// // metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros 
// // keliamuosius metus.

// function keturiolika(){
//     for( let i=1; i<2022; i++){
//         if(i%4 === 0 && i%100 !== 0 || i%400 === 0){
//             console.log("Metai "+i+" yra keliamieji");
//         }
//     }
// }

// // keturiolika();

// console.log("------------15---------");
// // 15. Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės 
// // tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus 
// // pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą, 
// // spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti 
// // nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie 
// // bilietų numeriai: 998 1002

// function penkiolika(){
//     let m = 997;
//     let n = 1003;

//     for(let i=m; i<=n; i++){
//         if(i%2 === 0 && i%10 !== 0){
//             console.log("Bilietas "+i+" kainuos pigiau");
//         }
//     }
// }

// penkiolika();

console.log("------------16---------");
// 16. Duotas natūralus skaičius n. Raskite pirmą skaitmenį.

function sesiolika(){
    let n = 1564651684;
    while(n>10){
        n = Math.floor(n/10);
    }
    console.log(n);
}

sesiolika();


console.log("------------17---------");
// 17. Duotas natūralusis skaičius n. Raskite skaitmenų sumą.

function septyniolika(n){
    let sum = 0;

    while (n>0){
        let lastNum = n%10;
        sum = sum + lastNum;
        n = Math.floor(n/10);
    }
    console.log(sum);
}

septyniolika(1234);


console.log("------------18---------");
// 18. Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321

function astuoniolika(){
    let n = 123; // Natūralusis skaičius n
    let n1 = n; //Įvedamas antrasis kintamasis tam, kad pabaigoje galėtume atspausdinti pradinį skaičių
    let reverse = 0; //Atbulinio skaičiaus lipdymui

    while (n1 >0){
        let lastNumber = n1 % 10;
        reverse = reverse * 10 + lastNumber;
        n1 = Math.floor(n1 / 10);
    }

    console.log(n); //123
    console.log(reverse); //321

}

astuoniolika();


console.log("------------19---------");
// 19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią 
// skaitmenį.

function devyniolika(){

    let n = 15861651;
    let maxNumber = 0;
    let minNumber = 10; 

    while(n>0){
        let lastNumber = n % 10;
        if(lastNumber > maxNumber){
            maxNumber = lastNumber;
        }
        if (lastNumber < minNumber){
            minNumber = lastNumber;
        }
        n = Math.floor(n / 10);
    }

    console.log(maxNumber);
    console.log(minNumber);
}

devyniolika();


console.log("------------20---------");
// 20. Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą, 
// kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.

function dvidesimt(){
    let deposit = 100;
    let p = 0.02;
    let metai = 0;

    while(deposit <= 100000){
        deposit += deposit*p;
        metai++;
    }

    console.log("Po "+metai+" metu indelis bus "+deposit);
}

dvidesimt();


console.log("------------21---------");
// 21. Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite 
// programą, kuri apskaičiuotų:
// a. Kiek žiedų buvo po n dienų
// b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų.


function dvidesimtVienas(){

    let number = 1; //Pradinis žiedų skaičius
    let dayCount = 0; //Kintamasis dienų skaičiui saugoti
    let m = 512; //Kiek ežeras gali talpinti žiedų
    let days = 10;

    for(let i=1; i<=days; i++){
        number = number*2;
        if(number <= (m/2)){
            dayCount++;
        }
    }
    console.log("Po "+days+" dienų žiedų bus "+number);
    console.log("Pusė ežero bus užklota po: "+dayCount+" dienų");


}

dvidesimtVienas();

console.log("------------22---------");
// 22. Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių 
// daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. 

// Parašykite programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių 
// medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo. 
// Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma: 
// Sodininkas dirbs 4 dienas

function dvidesimtDu(){
let m1 = 3; //Kiek išgenėjo pirmąją dieną
let m = 1; //Kiek medžių daugiau išgenėjo kiekvieną dieną
let n = 16; //Kiek medžių reikia išgenėti
let dayCount = 1; // Dienų skaičiavimas. Pradedam nuo 1, o ne nuo 0, nes žinome, kiek išgenėjo pirmąją dieną

while(m1<n){
    m1 += m1+m;
    dayCount++;
    console.log(m1);
    console.log(dayCount);
}

console.log("Sodininkui reiks dirbti dienų: "+dayCount);
}

dvidesimtDu();