//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//parola palindroma = parola che può essere letta da sinistra a destra e viceversa (osso, otto, anna)
var parola =  "cane"; //prompt("Inserisci una parola");
//applica il metodo split a parola
var parolaDivisa = parola.split("");//  sono un array
console.log(parolaDivisa);// avrò un array di 4 elementi

// usa il metodo reverse per invertire array
var parolaDivisa = parolaDivisa.reverse()

 // ora riunisci le lettere per avere la stringa e lo fai con join
 var parolaInvertita = parolaDivisa.join("");
 console.log(parolaInvertita);

 // confronta la parola iniziale con quella invertita per verificare se è palindroma 
 if(parola === parolaInvertita){
     console.log("la parola è palindroma");
 }else{
     console.log("la parola non è palindroma");
 }