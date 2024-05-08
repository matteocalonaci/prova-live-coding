
// Esercizio 1: condizioni con ausilio di operatori logici
// Maggiore e minore
// Scrivi un programma che dati quattro numeri,
// restituisca in output il maggiore e il minore.

// Esempio:

// Input: a = 3, b = -1, c = 4, d = -2
// Output: maggiore = 4, minore = 2

let a = 3;
let b = - 1;
let c = 4;
let d = -2;

//chi è il maggiore?
if (a > b && a > c && a > d) {
    console.log("il num maggiore è", a)
} else if (b > a && b > c && b > d) {
    console.log("il num maggiore è", b)
} else if (c > a && c > b && c > d) {
    console.log("il num maggiore è", c)
} else if (d > a && d > b && d > c) {
    console.log("il num maggiore è", d)
}
//chi è il minore??
if (a < b && a < c && a < d) {
    console.log("il num minore è", a)
} else if (b < a && b < c && b < d) {
    console.log("il num minore è", b)
} else if (c < a && c < b && c < d) {
    console.log("il num minore è", c)
} else if (d < a && d < b && d < c) {
    console.log("il num minore è", d)
}



//   Fai il professore
//   Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
//     v < 18: insufficiente
//     18 <= v < 21: sufficiente
//     21 <= v < 24: buono
//     24 <= v < 27: distinto
//     27 <= v <= 29: ottimo
//     v = 30: eccellente
//   Utilizza costrutto If.

//   Esempio:
//     Input: v = 29
//     Output: Distinto


let v = 23
if (v < 18) {
    console.log(v, "insufficente")
} else if (18 <= v && v <= 21) {
    console.log(v, "sufficente")
} else if (21 <= v && v <= 24) {
    console.log(v, "buono")
} else if (24 <= v && v <= 27) {
    console.log(v, "distinto")
} else if (27 <= v && v <= 29) {
    console.log(v, "ottimo")
} else if (v = 30) {
    console.log(v, "eccellente")
}