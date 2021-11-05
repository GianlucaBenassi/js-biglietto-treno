const km = prompt('Inserisci i km che percorrerai:');
const age = prompt('Inserisci la tua età:')

let price;

if (age < 18) {
    price = km * 0.21 * 80 / 100
} else if (age > 65) {
    price = km * 0.21 * 60 / 100
} else {
    price = km * 0.21
}

price = price.toFixed(2);
console.log(price);