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

/*CORREZIONE DI OTTAVIO 
function isPalindroma(word){ //RITORNA UN BOOLEANO, TRUE SE PALINDROMA 
    var reverseWord = '';

    //giriamo la parola
    //crea un for che legga una stringa dall'ultimo carattere fino al primo
    //così puoi scrivere la parola in ordine inverso di caratteri

    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    //console.log(reverseWord);

    if(word === reverseWord){
        return true;
    } else {
            return false;
        
    }
}
var userWord = prompt ("inserisci una parola");
var palindromaHtmlElement = document.getElementsByClassName('result-palindroma')[0];

if (isPalindroma(userWord)) {
    palindromaHtmlElement.innerHtml = "la parola è palindroma";
} else{
    palindromaHtmlElement.innerHtml = "la parola NON  è palindroma";
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


var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
document.getElementById("output").innerText = "il numero inserito dall'utente è  " +  userNumber;

var min= 1;
var max = 5;
function getRandomNumber(min, max){
    var result = Math.floor(Math.random() * max) + min;  //GENERA NMR RANDOM DA 1 A 5 PER IL PC
    return result; 
}
var randomNumPc = getRandomNumber(1, 5);
document.getElementById("output").innerText += " \n il numero random del pc è " +   randomNumPc;

/*function somma (userNum, randomNumPc){ //SOMMA DEI NUMERI NUMERO UTENTE E NUMERO PC
    return userNum + randomNumPc;
}*/
var totale = userNumber +  randomNumPc;
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
