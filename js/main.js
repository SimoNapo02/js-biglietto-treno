// chiedo quanti chilometri si vogliono percorrere
const Km = Number(prompt ("Quanti chilometri è lungo il tragitto?"));
// chiedi l'età
const anni = Number(prompt( "Quanti anni hai?"))
// calcolo il prezzo del biglietto
let prezzo = Km * 0.21
console.log(prezzo)
// se il passeggero ha meno di 18 anni, sconto 20%
// se il passeggero ha più di 65 anni, sconto 60%
// se il passeggero ha tra i 18 e 65 anni, nessuno sconto
