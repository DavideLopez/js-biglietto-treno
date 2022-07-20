// DOMANDA DISTANZA DA PERCORRERE
const distanza = parseInt(prompt('Inserisci quanti KM vuoi percorrere'));
// DOMANDA ETÀ UTENTE
const eta = parseInt(prompt('Inserisci la tua età per favore'));
console.log(distanza,eta);

// CALCOLO DEL PREZZO SAPENDO CHE IL BIGLIETTO COSTA 0.21€ AL KM
const prezzobiglietto = distanza * 0.21;
// SI APPLICA SCONTO DEL 20% PER I MINORENNI, QUINDI:
const scontominorenni = 0.2;
console.log(scontominorenni);
const prezzobigliettominori = prezzobiglietto * 1 - scontominorenni
// SI APPLICA SCONTO DEL 40% PER CHI HA SUPERATO I 65 ANNI
const sconto65 = 0.4;
const prezzobiglietto65 = prezzobiglietto * 1 - sconto65
console.log(sconto65)


// REGOLE

if (eta < 18) {
    
}