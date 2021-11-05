let km;
let age;
let price;
let htmlElement;

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

age = Math.floor(age);

// price calculation
if (age < 18) {

    price = km * 0.21 * 80 / 100;

    htmlElement = document.getElementById('age');
    htmlElement.insertAdjacentHTML('afterend', '<span>Sconto applicato: 20% </span>');

} else if (age > 65) {

    price = km * 0.21 * 60 / 100;

    htmlElement = document.getElementById('age');
    htmlElement.insertAdjacentHTML('afterend', '<span>Sconto applicato: 40% </span>');

} else {

    price = km * 0.21;

}

price = price.toFixed(2);

// html insert data
document.getElementById('km').innerHTML += km;
document.getElementById('age').innerHTML += age;
document.getElementById('price').innerHTML += price + '&euro;';