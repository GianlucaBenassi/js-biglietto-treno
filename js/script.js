let km;
let age;
let price;

// ask km until correct number
do {

    km = prompt('Inserisci i km che percorrerai:');
    if (isNaN(km) || km <= 0) {
        alert('Inserisci un valore per i km valido!');
    }

} while (isNaN(km) || km <= 0);

// ask age until valid
do {

    age = prompt('Inserisci la tua età:')
    if (isNaN(age) || age < 0) {
        alert("Inserisci un valore per l'età valido!");
    }
    
} while (isNaN(age) || age < 0);

// price calculation
if (age < 18) {
    price = km * 0.21 * 80 / 100;
} else if (age > 65) {
    price = km * 0.21 * 60 / 100;
} else {
    price = km * 0.21;
}

price = price.toFixed(2);

// html insert data
document.getElementById('km').innerHTML += km;
document.getElementById('age').innerHTML += age;
document.getElementById('price').innerHTML += price + '&euro;';