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
let prezzobigliettominori = prezzobiglietto - (prezzobiglietto * scontominorenni);
// SI APPLICA SCONTO DEL 40% PER CHI HA SUPERATO I 65 ANNI
const sconto65 = 0.4;
let prezzobiglietto65 = prezzobiglietto - (prezzobiglietto * sconto65);
console.log(sconto65)


// REGOLE

if (eta >= 18 && eta <= 65) {
    document.getElementById('title').innerHTML = ('il prezzo totale del tuo biglietto è: ') + prezzobiglietto.toFixed(2) + ('€');
} else if (eta < 18) {
    document.getElementById('title').innerHTML = ('il prezzo totale del tuo biglietto è: ') + prezzobigliettominori.toFixed(2) + ('€');
} else if (eta > 65) {
    document.getElementById('title').innerHTML = ('il prezzo totale del tuo biglietto è: ') + prezzobiglietto65.toFixed(2) + ('€');
}