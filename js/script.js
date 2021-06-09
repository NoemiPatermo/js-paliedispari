//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//parola palindroma = parola che può essere letta da sinistra a destra e viceversa (osso, otto, anna)

var parola =  prompt("Inserisci una parola");

/*applica il metodo split alla tua variabile
var parolaDivisa = parola.split("");//  sono un array
//console.log(parolaDivisa);// avrò un array di 4 elementi

// usa il metodo reverse per invertire array
var parolaDivisa = parolaDivisa.reverse()

 // ora riunisci le lettere per avere la stringa e lo fai con join
 var parolaInvertita = parolaDivisa.join("");
 //console.log(parolaInvertita);*/

 function parolaPalindroma(str){
     var strReverse = str.split('').reverse('').join('');
     return strReverse;
 }
 var parolaInvertita = parolaPalindroma(parola);
 if(parola === parolaInvertita){
     document.getElementById("palindroma").innerText = "Va bene, hai inserito una parola palindroma! Leggimi!"
 }else{
    document.getElementById("palindroma").innerText = "La prola inserita non è palindroma!"
 }

 