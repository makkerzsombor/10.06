import { Book } from "./book";

let lista : Book[] = [];
let lista2 : Book[] = [];

lista.push(new Book('Film_1',5));
lista.push(new Book('Film_2',8));
lista.push(new Book('Film_3',10));

console.log('filmek: ')
for (let i:number = 0; i < lista.length; i++) {
    console.log(lista[i].name);
}

console.log('7-nél nagyobb értékeléssel rendelkező filmek: ');
for (let i:number = 0; i < lista.length; i++) {
    if (lista[i].rating > 7) {        
    console.log('A film címe: '+lista[i].name + 'a film értékelése: '+lista[i].rating);
    }
}

console.log('');
console.log('Plusz feladatok');
console.log('');

for (let i = 0; i < 30; i++) {
        let rnd:number = Math.floor(Math.random()* 10 + 1) ;
        lista2.push(new Book('Book#'+i , rnd));
}
console.log('Második lista: ');
for (let i = 0; i < lista2.length; i++) {
    console.log(lista2[i].toString());
}

function bestof() {
    let index:number =0;
    let best:number = 0;
    for (let i = 0; i < lista2.length; i++) {
        if (lista2[i].rating > best) {
            best = lista2[i].rating;
            index = i;
        }
    }
    console.log('A legjobb értékelésű film: '+lista2[index].name+' értékelése: '+best);
}
bestof();