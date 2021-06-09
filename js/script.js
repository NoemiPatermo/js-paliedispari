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
 //console.log(parolaInvertita);*/
 var parola =  prompt("Inserisci una parola");

 function parolaPalindroma(parola){
     var stringa = parola.split('').reverse('').join('');
     return stringa;
 }
 var parolaInvertita = parolaPalindroma(parola);
 if(parola === parolaInvertita){
     document.getElementById("palindroma").innerText = "Va bene, hai inserito una parola palindroma! Leggimi!"
 }else{
    document.getElementById("palindroma").innerText = "La prola inserita non è palindroma!"
 }

 //Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri.
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Infine, dichiariamo chi ha vinto.