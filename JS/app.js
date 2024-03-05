/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Usando esclusivamente due input: 
un input per i km e un input per l’età, e un bottone.
Cliccando sul bottone recuperate i valori delle input*/

//1. dichiarare e selezionare gli elementi di input kilometers e age come variabili
const inputKilometersElement = document.getElementById("kilometers"); 
console.log(inputKilometersElement);

const inputAgeElement = document.getElementById("age");
console.log(inputAgeElement);

//2. dichiarare e selezionare l'elemento di tipo submit
const submitElement = document.getElementById("submit");
console.log(submitElement);

//3. aggiungere event listener al click del bottone

submitElement.addEventListener("click", function () {

    let kilometers = inputKilometersElement.value; //string
    let age = inputAgeElement.value; //string

    console.log(kilometers, age)
})



