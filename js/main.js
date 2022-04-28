// Prezzo Biglietto: 0.21€ per KM
const Km = 0.21


// 1. Chiedere numero di chilometri da percorrere
const distanza = Number(prompt("Inserire il numero di chilometri che si vuole percorrere"))
// 2. Chiedere l'età 
const anni = Number(prompt("Inserire l'età del passeggero"))
// 3. Calcolare il prezzo del viaggio
const prezzo = distanza * Km

document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + '€'
// 4. Scontare il biglietto in base all'età
let finale;

if(anni < 18){
    finale = (prezzo - ( prezzo * 20 / 100))
}else if(anni >= 65 ){
    finale = (prezzo - ( prezzo * 40 / 100))
}else{
    finale = prezzo
}

document.getElementById("finale").innerHTML = finale.toFixed(2) + '€'
console.log(finale.toFixed(2),"€")
