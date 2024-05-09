// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const leMieZucchine = [
    {
        varietà: 'blu',
        peso: 10,
        lunghezza: '15',
    }, {
        varietà: 'verde',
        peso: 15,
        lunghezza: '20',
    }, {
        varietà: 'rosa',
        peso: 12,
        lunghezza: "16",
    }, {
        varietà: 'nera',
        peso: 16,
        lunghezza: '22',
    }, {
        peso: 11,
        lunghezza: '16',
    }, {
        varietà: 'viaola',
        peso: 8,
        lunghezza: '11',
    }, {
        varietà: 'marrone',
        peso: 9,
        lunghezza: '12',
    }, {
        varietà: 'fucsia',
        peso: 22,
        lunghezza: "30",
    }, {
        varietà: 'giallo',
        peso: 20,
        lunghezza: '28',
    }, {
        varietà: 'lavanda',
        peso: 18,
        lunghezza: '25',
    }
];



let zucchinePesoScarso = []
console.log("peso poco :( ", zucchinePesoScarso)

let zucchinePesoMassive = []
console.log("peso un botto :D ", zucchinePesoMassive)

for (let i = 0; i < leMieZucchine.length; i++) {
    const zucchinaInQuestione = leMieZucchine[i].peso
    console.log(zucchinaInQuestione)
    if (zucchinaInQuestione < 15) {
        zucchinePesoScarso.push(zucchinaInQuestione)

    } else {
        zucchinePesoMassive.push(zucchinaInQuestione)
    }

}
let sommaScarse = zucchinePesoScarso[0] + zucchinePesoScarso[1] + zucchinePesoScarso[2] + zucchinePesoScarso[3] + zucchinePesoScarso[4]

console.log("la somma zucchine scarse è", sommaScarse)

function sommaZscarse() {
    let zScarse = 0
    for (let i = 0; i < zucchinePesoScarso.length; i++) {
        zScarse = zScarse + zucchinePesoScarso[i]
    }
    console.log("volore zScarse", zScarse)
    return zScarse
}
sommaZscarse()

