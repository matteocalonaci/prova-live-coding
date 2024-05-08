// Il calendario mediocre
// Scrivi un programma che dato:
//   - Il numero di giorni nel mese
//   - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
// Stampi il calendario di un mese.

// Esempio:
//   Input: numero giorni = 31, giorno settimana = 0
//   Output: Lun 1
//           Mar 2
//           Mer 3
//           Gio 4
//           Ven 5
//           Sab 6
//           Dom 7
//           Lun 8
//           Mar 9
//           Mer 10
//           Gio 11
//           Ven 12
//           Sab 13
//           Dom 14
//           Lun 15
//           Mar 16
//           Mer 17
//           Gio 18
//           Ven 19
//           Sab 20
//           Dom 21
//           Lun 22
//           Mar 23
//           Mer 24
//           Gio 25
//           Ven 26
//           Sab 27
//           Dom 28
//           Lun 29
//           Mar 30
//           Mer 31

//pesco in pagina ul
let ul = document.getElementById("ul")
//creo li
let li = document.createElement("li")

//giorni della settimana
let lun = "lunedì"
let mar = "martedì"
let mer = "mercoledì"
let gio = "giovedì"
let ven = "venerdì"
let sab = "sabato"
let dom = "domenica"
for (let i = 1; i <= 31; i++) {

    if (i == 1 || i == 8 || i == 15 || i == 22 || i == 29) {
        console.log(i, lun);
    } else if (i == 2 || i == 9 || i == 16 || i == 23 || i == 30) {
        console.log(i, mar);
    } else if (i == 3 || i == 10 || i == 17 || i == 24 || i == 31) {
        console.log(i, mer);
    } else if (i == 4 || i == 11 || i == 18 || i == 25) {
    } else if (i == 5 || i == 12 || i == 19 || i == 26) {
        console.log(i, ven)
    } else if (i == 6 || i == 13 || i == 20 || i == 27) {
        console.log(i, sab)
    } else if (i == 7 || i == 14 || i == 21 || i == 28) {
        console.log(i, dom)
    }

}


//X STAMPA IN PAGINA NON LO SO

let risultati;
for (let i = 0; i <= 10; i++) {
    if (risultati = `${i * 2}`) {
        console.log(risultati)
    }
}
