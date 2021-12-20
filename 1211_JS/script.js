// 1. 
// Parašykite programą, kuri apskaičiuotų, kiek knygų k vidutiniškai per metus perskaito 
// vienas mokyklos bibliotekos lankytojas. Žinomas vidutiniškai per vieną mėnesį 
// perkaitytų knygų skaičius v ir vidutiniškai per metus apsilankiusiųjų bibliotekoje skaičius 
// n. Pasitikrinkite: Įvedę v = 120 , n = 800, turėtume gauti: k = 2;

let v = 200;
let n = 0;

let vYear = v*12;
let k = Math.ceil(vYear/n);

if(vYear > 0 && n > 0){
    console.log(k);
}
else{
    console.log("Lankytojų nebuvo arba niekas neskaitė knygų");
}

// 2. 
//  Parašykite programą, kuri apskaičiuotų, kiek vidutiniškai keleivių k važiuoja į Vilnių 
// viename traukinio vagone, jei žinomas traukinio keleivių skaičius n, keleivių vykstančių 
// ne į Vilnių, skaičius m ir vagonų skaičius v. Pasitikrinkite: Įvedę n = 100 , m = 20 ir v = 
// 4, turėtume gauti: k = 20;

let x = 100;
let y = 20;
let z = 4;

let vilnius = x-y;
let zVilnius = vilnius / z;

if(vilnius > 0 && z > 0){
    console.log(zVilnius);
}
else{
    console.log("Į Vilnių niekas nevažiuoja arba traukinys be vagonų");
}



// 3. 
// Atnaujinus sodo namą, jo kaina išaugo 25%. Rašant skelbimą apie šį namą, buvo 
// padaryta klaida — neteisingai nurodyta naujoji kaina. Kokia turėtų būti naujoji namo 
// kaina, kai pradinė yra n eurų, o nauja parašyta kaina p eurų? Pasitikrinkite: Kai n = 
// 54000, p=60000, turi būti spausdinama: nauja namo kaina 67500.

let p1 = 2000;
let p2 = 61000;
// Iš anksto pasiskaičiuojam teisingą kainą, pakeltą 25%
let p3 = p1*1.25;

if( p3 !== p2){
    console.log("Nauja namo kaina: "+p3);
}
else if (p3 === p2){
    console.log("Namo kaina parašyta teisingai");
}
else{
    console.log("Kažkas negerai");
}

// 4. 
// Viename ūkyje surinkta n (realus) tonų obuolių derliaus, o kitame surinkta m (realus) 
// tonų mažiau. Kiek tonų surinkta abiejuose ūkiuose? Pasitikrinkite: Kai n = 39.2, m=0.4, 
// turi būti spausdinama: abiejuose ūkiuose surinkta 78.

let derlius = 1;
let skirtumas = 0.5;

if(derlius > skirtumas){
    console.log("Abiejuose ūkiuose surinkta: "+(derlius+(derlius-skirtumas)));
}
else{
    console.log("Derliaus nesurinkta");
}


// 5. 
// Senį besmegenį sudaro trys sniego rutuliai. Popieriuje jie atrodo kaip skrituliai. 
// Mažiausio skritulio spindulys r. Sudarykite programą, kuri apskaičiuotų kiekvieno 
// skritulio plotą, jei kitų apskritimų spinduliai 2 kartus didesni už prieš tai esantį? 
// Pasitikrinkite: Kai r=1, turi būti spausdinama: skritulių plotai 3.14, 12.56 ir 50.24

const PI = 3.14;
let r = 1;
let r1 = r*2;
let r2 = r1*2;

if(r > 0){
    console.log("Skritulių plotai: "+ ((r*r)*PI) +" "+ ((r1*r1)*PI) +" ir "+ ((r2*r2)*PI));
}
else{
    console.log("Spindulys įvestas neteisingai");
}


// 6. Turime šešis atsitiktinius skaičius nuo 1000 iki 9999. Surikiuoti juos didėjimo tvarka

let sk1 = 1111;
let sk2 = 6222;
let sk3 = 4837;
let sk4 = 1537;
let sk5 = 8767;
let sk6 = 3722;

if (sk1>=sk2) {
    let k11=sk1;
    sk1=sk2;
    sk2=k11;
}
if (sk2>=sk3) {
    let k21=sk2;
    sk2=sk3;
    sk3=k21;
}
if (sk3>=sk4) {
    let k31=sk3;
    sk3=sk4;
    sk4=k31;
}
if (sk4>=sk5) {
    let k41=sk4;
    sk4=sk5;
    sk5=k41;
}
if (sk5>=sk6) {
    let k51=sk5;
    sk5=sk6;
    sk6=k51;
}
 
if (sk1>=sk2) {
    let k12=sk1;
    sk1=sk2;
    sk2=k12;
}
if (sk2>=sk3) {
    let k22=sk2;
    sk2=sk3;
    sk3=k22;
}
if (sk3>=sk4) {
    let k32=sk3;
    sk3=sk4;
    sk4=k32;
}
if (sk4>=sk5) {
    let k42=sk4;
    sk4=sk5;
    sk5=k42;
}
 
if (sk1>=sk2) {
    let k13=sk1;
    sk1=sk2;
    sk2=k13;
}
if (sk2>=sk3) {
    let k23=sk2;
    sk2=sk3;
    sk3=k23;
}
if (sk3>=sk4) {
    let k33=sk3;
    sk3=sk4;
    sk4=k33;
}
 
if (sk1>=sk2) {
    let k14=sk1;
    sk1=sk2;
    sk2=k14;
}
if (sk2>=sk3) {
    let k24=sk2;
    sk2=sk3;
    sk3=k24;
}
 
if (sk1>=sk2) {
    let k15=sk1;
    sk1=sk2;
    sk2=k15;
}
 
console.log (sk1+"; "+sk2+"; "+sk3+"; "+sk4+"; "+sk5+"; "+sk6);
