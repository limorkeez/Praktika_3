// Math.floor() - Apvalina skaiciu i mazaja puse - 4.9 = 4
// Math.round() - Apvalina skaiciu pagal matematines taisykles 4.5 = 5
// Math.ceil() - Aplavina skaiciu i didziaja puse - 4.1 = 5
// &&   - AND (IR) operatorius. Duoda reiksme TRUE, jei abi(!) salygos teisingos
// %    - Isveda skaiciaus liekana
// ||   - OR (ARBA) operatorius. Duoda reiksme TRUE, jei bent viena(!) salyga teisinga


// 11.
// Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petrasnepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.

// let v = 9;
// let m = 0;
// let vm = (v*60)+m;
// console.log(vm);

// let v1 = 9;
// let m1 = 30;
// let vm1 = (v1*60)+m1;
// console.log(vm1);

// let m2 = 40;
// let cameAt = vm1+m2;
// console.log(cameAt);

// if(cameAt <= vm){
//     console.log("Petras į pamoką nepavėluos");
// }
// else{
//     console.log("Petras į pamoką pavėluos");
// }


// 12.
// Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:Trikampį sudėlioti negalima.

// let n = 27;

// if((n % 3 === 0) && (n != 0)){
//     console.log("Trikampį sudėlioti galima");
// }
// else{
//     console.log("Trikampio sudėlioti negalima");
// }
    

// 13.
// Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.

// let x = 1900;
// let y = 1896;
// let xy = x-y;

// if (xy%2===0){
//     console.log(xy/4+1);
// } else {
//     console.log("Metai neolimpiniai");
// }


// 14.
// Žinomi kvadratinės lygties ax2 +bx+c=0 koeficientai a, b, c. Parašykite programą, kuri rastų lygties sprendinius. Pasitikrinkite:a=1, b=2, c=1, kompiuterio ekrane turi būti rodomas rezultatas: vienas sprendinys 1.00 a=1, b=4, c=3, kompiuterio ekrane turi būti rodomas rezultatas: du sprendiniai 3.00 1.00 a=1, b=3, c=4, kompiuterio ekrane turi būti rodomas rezultatas: nėra sprendinių

let a = 1;
let b = 4;
let c = 3;

// Diskriminantas
let d = (b*b)-(4*a*c);
console.log(d);

// Formule vienam sprendiniui, jei d bus =0
let spr = -b/2*a;

// Formules dviems sprendiniams, jei d bus >0
let spr1 = ((-b)+Math.sqrt(d))/(2*a);
let spr2 = ((-b)-Math.sqrt(d))/(2*a);

if(d === 0){
    console.log("Vienas sprendinys: "+spr);
}
else if(d>0){
    console.log("Du sprendiai: "+spr1+" "+spr2);
}
else{
    console.log("Sprendinių nėra");
}


// 15.
// Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10

let cents = 30;
let price = 20;

let quantity = Math.floor(cents/price);
let centsLeft = cents % price;

if(cents>=price){
    console.log("Saulius nusipirks porcijų: "+quantity+", liks centų: "+centsLeft);
}
else{
    console.log("Saulius negali nusipirkti ledų");
}


// 16.
// Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę. Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

let n = 100;
let m = 14;
let k = Math.ceil(n/m);


if(m>0 && n>0){
    console.log("Kiek kartų reikės nuvažuoti į sandėlį: "+ k);
}
else if(m>0 && n<=0){
    console.log("Nėra ką vežti");
}
else{
    console.log("Mašinoj nebėr vietos");
}




// 17.
// Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.

let x = 5;
let y = 6;


if(x>y){
    console.log("Įvesta: "+ x +" ir "+ y +", rezultatas: "+ (x-1) +" ir "+ (y+1));
}
else if (x<y){
    console.log("Įvesta: "+ x +" ir "+ y +", rezultatas: "+ (x+1) +" ir "+ (y-1));
}
else{
    console.log("Skaičiai vienodi arba nėra sveikieji");
}