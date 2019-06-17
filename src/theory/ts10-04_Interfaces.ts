/** TS in Depth: #04. Interfaces */
/** TS10.04.p01 title */
/** TS10.04.p02 title */
/** TS10.04.p03 title */
/** TS10.04.p04 title */
/** TS10.04.p05 Defining Interface */
// interface IBook {
//     id: number;
//     title: string;
//     author: string;
//     pages?: number;
//     markDamaged: (reason: string) => void;
//     readonly pubDate: number;
//     [propName: string]: any;
// }

/** TS10.04.p06 Interfaces for Indexable Objects */
// interface ILetterMap {
//     [index: string]: string; // type of index can be string or number
//     second: string; // aditional property 'second' must return string
//     third?: string; // optional property 'third' must return string
// }
// const map: ILetterMap = {second: "B"};
// map['first'] = "A";
// map['third'] = "C";

/** TS10.04.p07 Practice */
/** TS10.04.p08 Interfaces for function Types */
/** TS10.04.p09 Interfaces for function Types */
// function createCustomerID(name: string, id: number): string {
//     return `${ name }${ id }`;
// }
// interface IStringGenerator {
//     (chars: string, nunm: number): string;
// }
// // let IdGenerator: (chars: string, nunm: number) => string; // Literal declaration of Function type
// let IdGenerator: IStringGenerator;
// IdGenerator = createCustomerID;

/** TS10.04.p10 Practice #08. Defining an Interface for Function Types */
/** TS10.04.p11 EXTENDING INTERFACES */
/** TS10.04.p12 Extending Interfaces */
// interface ILibraryResource {
//     catalogNumber: number;
// }
// interface IBook {
//     title: string;
// }
// interface IEncyclopedia extends ILibraryResource, IBook {
//     volume: number;
// }
//
// let encBook: IEncyclopedia = {
//     catalogNumber: 1234,
//     title: 'Some Title',
//     volume: 1
// };

/** TS10.04.p13 Interfaces Extending by Classes */
// class LibraryResource {
//     catalogNumber: number;
// }
// class Book {
//     title: string;
// }
// interface IEncyclopedia extends LibraryResource, Book {
//     volume: number;
// }
//
// let encBook: IEncyclopedia = {
//     catalogNumber: 1234,
//     title: 'Some Title',
//     volume: 1
// };

/** TS10.04.p14 Practice #09. Extending Interface */
/** TS10.04.p15 title */
/** TS10.04.p16 title */
/** TS10.04.p17 title */
/** TS10.04.p18 title */
/** TS10.04.p19 title */

/** TS10.04.p20 title */
/** TS10.04.p21 title */
/** TS10.04.p22 title */
/** TS10.04.p23 title */
/** TS10.04.p24 title */
/** TS10.04.p25 title */
/** TS10.04.p26 title */
/** TS10.04.p27 title */
/** TS10.04.p28 title */
/** TS10.04.p29 title */


