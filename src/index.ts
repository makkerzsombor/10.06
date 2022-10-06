import { Book } from "./book";

let lista : Book[] = [];

lista.push(new Book('Film_1',5));
lista.push(new Book('Film_2',8));
lista.push(new Book('Film_3',10));

console.log('filmek: ')
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].name);
}

console.log('7-nél nagyobb értékeléssel rendelkező filmek: ');
for (let i = 0; i < lista.length; i++) {
    if (lista[i].rating > 7) {        
    console.log('A film címe: '+lista[i].name + 'a film értékelése: '+lista[i].rating);
    }
}

console.log('');
console.log('');
console.log('');


