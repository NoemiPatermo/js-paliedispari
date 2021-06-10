//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//parola palindroma = parola che può essere letta da sinistra a destra e viceversa (osso, otto, anna)

/*applica il metodo split alla tua variabile
var parolaDivisa = parola.split("");
// sono un array adesso
                                                                // usa il metodo reverse per invertire array
                                                               var parolaDivisa = parolaDivisa.reverse()

 // ora riunisci le lettere per avere la stringa e lo fai con join
 var parolaInvertita = parolaDivisa.join("");
 */
/*
 var parola =  prompt("Inserisci una parola");

 function parolaPalindroma(parola){
     var stringa = parola.split('').reverse('').join('');
     return stringa;
 }
 var parolaInvertita = parolaPalindroma(parola);
 if(parola === parolaInvertita){
     document.getElementById("palindroma").innerText = "Va bene, hai inserito una parola palindroma! Leggimi!"
 }else{
    document.getElementById("palindroma").innerText = "La parola inserita non è palindroma!"
 }
 */

 //Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri.
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Infine, dichiariamo chi ha vinto.
var sceltaPariDispari = prompt("Scegli: pari o dispari?");
document.getElementById("output").innerHTML = "Ok, hai scelto:  " +  sceltaPariDispari;//non me lo stampa

var userNum =  parseInt(prompt("Inserisci un numero da 1 a 5"));
document.getElementById("output").innerText = "il numero inserito dall'utente è  " +  userNum;

var min= 1;
var max = 5;
function getRandomNumber(min, max){
    var result = Math.floor(Math.random() * max) + min;  //GENERA NMR RANDOM DA 1 A 5 PER IL PC
    return result; 
}
var randomNumPc = getRandomNumber(1, 5);
document.getElementById("output").innerText += " \n il numero random del pc è " +   randomNumPc;

function somma (userNum, randomNumPc){ //SOMMA DEI NUMERI NUMERO UTENTE E NUMERO PC
    return userNum + randomNumPc;
}
var totale = somma(userNum, randomNumPc);
document.getElementById("output").innerText += " \n la somma dei due numeri è " +   totale;

// SE LA SOMMA ESCE PARI O DISPARI LO FAI CON UN FUNZIONE (SE LA SOMMA è PARI E L' UTENTE (AVEVA SCRITTO PARI) HA INDOVINATO E HA VINTO)
// SE AVEVA SCRITTO DISPARI HA PERSO 
//POI VEDI CHI VINCE

if (totale % 2 === 0 && randomNumPc % 2 === 0) {
    document.getElementById("output").innerText += " \n Complimenti hai vinto!";
} else if(totale % 2 !=0 && randomNumPc % 2 != 0){
    document.getElementById("output").innerText += " \n Hai vinto di nuovo!";
}else{
    document.getElementById("output").innerText += " \n Mi dispiace hai perso, ha vinto il pc!";
}