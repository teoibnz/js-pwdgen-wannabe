const myName = prompt("Inserisci il tuo nome");

const surname = prompt("Inserisci il tuo cognome");

const favColor = prompt("Inserisci il tuo colore preferito");

console.log(
    `
    ${myName};
    ${surname};
    ${favColor};
    `
);

let numberRandom = 21;
console.log(numberRandom)



let myNewPassword = myName + surname + favColor + numberRandom;
console.log(myNewPassword);


document.getElementById('generated-pw').innerHTML = myNewPassword;