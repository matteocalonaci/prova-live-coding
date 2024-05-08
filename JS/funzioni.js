// Conta il numero
// Scrivi una funzione che dato un numero intero (massimo 9999)
//  conti da quante cifre è formato.

// Esempi:
//   Input: numero = 9
//   Output: 1 cifra

//   Input: numero = 245
//   Output: 3 cifre

function funzioneNumLength(pippo) {
    let numberLength;
    let number = pippo;
    let numberToString = number.toString()
    numberLength = numberToString.length
    console.log(`Il numero è composto da ${numberLength} elementi`)
    return numberLength
}


funzioneNumLength(85454546)


// FUNZIONE TABELLINE
function tabelline(moltiplicatore) {
    let risultato;
    for (let i = 0; i <= 10; i++) {
        if (risultati = `${i * moltiplicatore}`) {
            console.log(`Il risultato di ${i} * ${moltiplicatore} = ${risultati}`)
        }
    } return risultato
}

tabelline(18)



// Pa-pa-pa lindomo
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Nel controllo scarta gli spazi e i segni di punteggiatura.

// Esempio:
//   Input: i topi non avevano nipoti
//   Output: TRUE


// Consigli:
// Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
// in questo modo: str.replace(/\W/g, "").


let nome = "addo"
let nomeLength = nome.lenth



// function palindroma() {
//     if (nome[0] == nome[3] && nome[1] == nome[2]) {
//         console.log("è palindromo")
//     } else {
//         console.log("non è palindromo")

//     }
// }
// palindroma()

// let testo = "i topi non avevano nipoti"
// let parolaDivisa = testo.split('')
// const parolaInvertita = testo.join('')

// console.log('parola divisa', ugo)
// console.log(testo.length)


// function palindroma() {
//     if (testo == parolaInvertita) {
//         console.log(" è palindromo")
//         nome[8] == nome[16] && nome[9] == nome[15]
//         console.log("è palindromo")
//     } else {
//         console.log("non è palindromo")

//     }
// }

//FUNZIONE PALINDROMA
const parola = 'itopinonavevanonipoti';
let parolaDivisa = parola.split('');
parolaDivisa = parolaDivisa.reverse();
const parolaInvertita = parolaDivisa.join('');

function palindroma() {
    if (parola === parolaInvertita) {
        console.log('la Parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }
}

palindroma()
