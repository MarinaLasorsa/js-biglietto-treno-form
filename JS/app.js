/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Usando esclusivamente due input: 
un input per i km e un input per l’età, e un bottone.
Cliccando sul bottone recuperate i valori delle input*/

//1. dichiarare e selezionare elemento di input kilometers come variabile
const inputKilometersElement = document.getElementById("kilometers");
console.log(inputKilometersElement);

//Dichiarare elemento select
//const inputAgeElement = document.getElementById("age");
//console.log(inputAgeElement);

const selectAgeElement = document.getElementById("age");
console.log(selectAgeElement);


//2. dichiarare e selezionare l'elemento di tipo submit
const submitElement = document.getElementById("submit");
console.log(submitElement);

//3. aggiungere event listener al click del bottone

submitElement.addEventListener("click", function () {

    let kilometers = parseInt(inputKilometersElement.value); //number
    let age = selectAgeElement.value; //string

    console.log(kilometers, age);


    //Calcolare il prezzo del biglietto:

    //1. definire prezzo biglietto iniziale moltiplicando 0.21 per la variabile chilometri dichiarata

    let basePrice = kilometers * 0.21; //number
    console.log("prezzo base: ", basePrice);

    //2. definire variabile sconto come 0

    let discount = 0;

    //3. SE variabile age è "minor", 

    if (age === "minor") {

        //lo sconto è del 20% quindi prezzo iniziale moltiplicato per 0.2
        discount = basePrice * 0.2;
    }  

    //4. ALTRIMENTI SE variabile age è "senior",
    else if (age === "senior") {

        //lo sconto è del 40% quindi prezzo iniziale moltiplicato per 0.4
        discount = basePrice * 0.4;
    }

    //5. ALTRIMENTI sconto è 0 quindi prezzo iniziale moltiplicato per 0
    else {
        discount = basePrice * 0;
    }

    //6. dichiarare prezzo finale come prezzo iniziale meno la variabile sconto
    
    const finalPrice = basePrice - discount;

    //7. stampare prezzo finale in console (con solo 2 cifre decimali)

    console.log("Prezzo totale del biglietto: " + finalPrice.toFixed(2));

})


