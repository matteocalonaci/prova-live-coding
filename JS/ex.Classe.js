const leMieZucchine = [
    {
        varietà: 'blu',
        peso: '10',
        lunghezza: '15 cm',
    }, {
        varietà: 'verde',
        peso: '15',
        lunghezza: '20 cm',
    }, {
        varietà: 'rosa',
        peso: '12',
        lunghezza: "16 cm",
    }, {
        varietà: 'nera',
        peso: '16',
        lunghezza: '22 cm',
    }, {
        varietà: 'bianca',
        peso: "11",
        lunghezza: '16 cm',
    }, {
        varietà: 'viaola',
        peso: '8',
        lunghezza: '11 cm',
    }, {
        varietà: 'marrone',
        peso: '9',
        lunghezza: '12 cm',
    }, {
        varietà: 'fucsia',
        peso: '22',
        lunghezza: "30 cm",
    }, {
        varietà: 'giallo',
        peso: '20',
        lunghezza: '28 cm',
    }, {
        varietà: 'lavanda',
        peso: "18",
        lunghezza: '25 cm',
    }
];

console.log(leMieZucchine)


let a = Number(leMieZucchine[0].peso)
console.log(typeof a)
let b = Number(leMieZucchine[1].peso)
let c = Number(leMieZucchine[2].peso)
let d = Number(leMieZucchine[3].peso)
let e = Number(leMieZucchine[4].peso)
let f = Number(leMieZucchine[5].peso)
let g = Number(leMieZucchine[6].peso)
let h = Number(leMieZucchine[7].peso)
let i = Number(leMieZucchine[8].peso)
let l = Number(leMieZucchine[9].peso)

let sommaZucchine = (a + b + c + d + e + f + g + h + i + l)
console.log("Il peso delle mie zucchine", sommaZucchine, "grammi")


//NON CAPISCO PERCHè .peso DICE NON DEFINITO
// function addizione(dati) {
//     sommaZucchine = 0
//     for (let i = 0; i <= dati.length; i++) {
//         let pesoZucchina = Number(dati[i]);
//         pesoZucchina = dati[i].peso
//         console.log(typeof pesoZucchina, pesoZucchina)
//         sommaZucchine = sommaZucchine + pesoZucchina

//     }
//     return "il peso tot è" + sommaZucchine;
// }

// addizione(leMieZucchine)
