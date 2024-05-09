/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

let numeroGatti = 44
let gattiXfila = 6


let file = Math.round(numeroGatti / gattiXfila)
if (numeroGatti % gattiXfila == 0) {

    console.log("Non c'è resto! le file sono:", file)
} else {
    let resto = numeroGatti % gattiXfila
    console.log("le file sono:", file, "Il resto è:", resto)

}