/** TS in Depth: #05. Classes */
/** TS10.05.p01 Classes */
/** TS10.05.p02 Outline */
/** TS10.05.p03 WHAT IS CLASS? */
/** TS10.05.p04 What is Class? */
// 1. Template for creating Object
// 2. Provides state and behaviour storage
// 3. Encapsulates reusable functionality

/** TS10.05.p05 Interfaces VS Classes */
/** TS10.05.p06 Class Members */
// 1. Constructor
// 2. Properties
// 3. Methods
// 4. Accessors
// 5. Access Modifiers

/** TS10.05.p07 CONSTRICTORS */
/** TS10.05.p08 Constrictors */
// class ReferenceItem {
//     constructor(title: string, publisher?: string) {
//         // initialization goes here ...
//     }
// }
// const encyclopedia = new ReferenceItem('WorldPedia', 'WorldPub');

/** TS10.05.p09 PROPERTIES AND METHODS */
/** TS10.05.p10 Properties and Methods */
// class ReferenceItem {
//     numberOfPages: number; // public property
//     // year?: number; // optional property
//     get editor(): string {
//         // custom getter logic
//         return '';
//     }
//     set editor(newEditor: string) {
//         // custom setter logic
//     }
//     printChapterTitle(chapterNum: number): void {
//         // print title here
//     }
// }

/** TS10.05.p11 Parameter Properties */
// // v1
// class Author {
//     name: string;
//     constructor(authorName: string) {
//         this.name = authorName;
//     }
// }

// // v2
// class Author {
//     constructor(public name: string) {}
// }

/** TS10.05.p12 Static Properties */
// class Library {
//     constructor(public name: string) {}
//     static description: string = 'A source of knowledge';
//     static readonly place: string = 'Kyiv';
//     static print() {}
// }
//
// let lit = new Library('Kyiv State Library');
// let name = lit.name; // available for Instance;
// let desc = Library.description; // available on Class
// Library.print(); // static method - available on Class


/** TS10.05.p13 ACCESS MODIFIER */
/** TS10.05.p14 Access Modifier */
// Public - accesseble for All
// Private - accesseble for the instance of Class only
// Protected - accesseble for the instance of Class and inherited classes
// +Readonly modificator

/** TS10.05.p15 Compare Classes w/ Public Properties */
// // Info: If public prop are equal by names and types and
// // there is no private/protecter properties -
// // so Classes are compatible.
// class Book {
//     constructor (public title: string) {}
// }
// class Journal {
//     constructor (public title: string) {}
// }
// let book = new Book('Typescript');
// let journal = new Book('Chip');
// book = journal; // OK !!! are compatible


/** TS10.05.p16 Compare Classes w/ Private or Protected Properties */
// class Book {
//     constructor (private title: string) {}
// }
// class Journal {
//     constructor (private title: string) {}
// }
// let book = new Book('Typescript');
// let journal = new Book('Chip');
// book = journal; // Error !!! - Not compatible

/** TS10.05.p17  Compare Classes w/ Private or Protected Properties */
// class Book {
//     constructor (private title: string) {}
// }
// class Journal extends Book {
//     constructor (title: string) {
//         super(title);
//     }
// }
// let book = new Book('Typescript');
// let journal = new Book('Chip');
// book = journal; // OK !!! are compatible


/** TS10.05.p18 Protected Constructor */
// class Book {
//     protected constructor (private title: string) {}
// }
// class Journal extends Book {
//     constructor (title: string) {
//         super(title);
//     }
// }
// let book = new Book('Typescript'); // Error - Constructor is protected
// let journal = new Book('Chip'); // OK


/** TS10.05.p19 Practice #11. Creating and Using Classes */

/** TS10.05.p20 EXTENDING CLASSES WITH INHERITANCES */
/** TS10.05.p21 Inheritances */
/** TS10.05.p22 Extending Classes with Inheritances */
// class ReferenceItem {
//     title: string;
//     year: number;
//     printItem(): void {
//         // print something
//     }
// }
//
// class Journal extends ReferenceItem {
//     contributors: string[];
//     constructor() {
//         super();
//         // initialization
//     }
// }

/** TS10.05.p23 Practice #12. Extending Classes */

/** TS10.05.p24 title */
/** TS10.05.p25 title */
/** TS10.05.p26 title */
/** TS10.05.p27 title */
/** TS10.05.p28 title */
/** TS10.05.p29 title */


