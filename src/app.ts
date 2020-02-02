import {Category} from "./enums";
import {getBooksByCategoryPromise, logSearchResults} from "./functions";
// import RefBook from './classes/encyclopedia';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ============================================================




// assertStringValue('rrr');
// console.log(bookTitleTransform('abc'));

/* Task 02.01 */
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// console.log(calcTotalPages());

// Task 03.01
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

// const book = getBookByID(2);
// console.log(book);

//
// let myId: string = createCustomerID('Ann', 10);
// console.log(myId);
//
// let idGenerator: (name: string, id: number) => string;
// // idGenerator = (name: string, id: number): string => `${name}${id}`;
// idGenerator = createCustomerID;
//
// myId = idGenerator('Ann', 20);
// console.log(myId);

/* Task 05 */
// createCustomer('Ann');
// createCustomer('Boris', 20);
// createCustomer('Anton', 30, 'Lviv');

// const titles = getBookTitlesByCategory();
// console.log(titles);
//

// logFirstAvailable();
// let myBooks: string[] = checkoutBooks('vasia', 1, 2, 4);
// console.log(myBooks);



// console.log(getTitles('Evan Burchard'));
// console.log(getTitles(true));
// console.log(getTitles(4, true));
// console.log('checkedOutBooks', getTitles(false));


/* 04.01 */
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   // year: 2015,
//   // copies: 3
//   // markDamaged: (reason: string): void => console.log(`Damaged: ${reason}`)
//   markDamaged: (reason: string): void => {
//     console.log(`Damaged: ${reason}`);
//   }
// };

// // printBook(getBookByID(2));
// printBook(myBook);
// myBook.markDamaged('missing back cover');


// const logDamage: Logger = (reason: string): void => console.log(`Damaged: ${reason}`);
// logDamage('AAAAAAA.....');


/* 04.03 */
// const favoriteAuthor: Author = {
//   name: 'Vasia',
//   email: 'e-mail@domain.comm',
//   numBooksPublished: 4,
// };
//
// const favoriteLibrarian: Librarian = {
//   name: 'Roma',
//   email: 'e-mail@domain.comm',
//   department: 'security dep',
//   assistCustomer: (name: string): void => console.log(name)
// };
//
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// };
//
// console.log(offer?.book?.title);

// console.log(getBookProp(myBook, 'author'));

/* Task 05.01. Creating and Using Classes */
// const ref: ReferenceItem = new ReferenceItem('MyTitle', 2020);
// ref.printItem();
//
// ref.publisher = 'abcdefg';
// console.log('publisher', ref.publisher); // 'ABCDEFG'

/* Task 05.02. */
// const refBook: Encyclopedia = new Encyclopedia('Title2', 2019, 3);
// refBook.printItem();
// console.log(refBook);

/* Task 05.03. Creating Abstract Classes */
// const refBook: Encyclopedia = new Encyclopedia('Title2', 2019, 3);
// refBook.printCitation();
// console.log(refBook);

/* Task 05.04. Interfaces for Class Types */
// const favoriteLibrarian: Librarian = new UniversityLibrarian('Anna', 'b', 'c');
// // favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

/* Task 05.05. Intersection and Union Types */
// const personBook: PersonBook = {
//   name: 'Ann',
//   email: 'e@mail.comm',
//   title: 'Introduction Union Types',
//   author: 'Unknown',
//   available: true,
//   category: Category.TypeScript,
//   id: 5
// };
// console.log(personBook);

// const partialPersonBook: Partial<PersonBook> = {
//   name: 'Ann',
//   // email: 'e@mail.comm',
//   // title: 'Introduction Union Types',
//   // author: 'Unknown',
//   available: true,
//   category: Category.TypeScript,
//   id: 5
// };
//
// console.log(partialPersonBook);

/* Task 06.03. */
// const refBook: RefBook = new RefBook('Title2', 2019, 3);
// refBook.printItem();
// console.log(refBook);

/* Task 06.05. Dynamic Import Expression */
// import('./classes')
//     .then(classes => {
//       const reader = new classes.Reader('myReader');
//       console.log(reader);
//       reader.take(getBookByID(2));
//       console.log(reader);
//     })
//     .catch();

// /* Task 07.01. Generic Functions */
// console.log(purge([1,2,3,4,'5'])); // purge<number | string>(...)
// // console.log(purge<number>([1,2,3,4,'5'])); // ERROR!!!
// console.log(purge(['a','b','c','d','e'])); // purge<string>(...)
//
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// // console.log(purge<Book>(inventory));
// const result = purge(inventory);
// console.log(result);



// /* Task 07.02. Generic Interfaces and Classes */
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// bookShelf.add(...inventory);
// console.log('firstBook', bookShelf.getFirst());
//
// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// console.log('firstMagazine', magazineShelf.getFirst());

// /* Task 07.03. Generic Constraints */
// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// /* Task 07.04. Utility Types */
// const bookRequiredFields: BookRequiredFields = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: null
//   // markDamaged: (reason: string): void => {
//   //   console.log(`Damaged: ${reason}`);
//   // }
// };
//
// const updatedBook: UpdatedBook = {
//   id: 7
// };
//
// const authorWoEmail: AuthorWoEmail = {
//   name: 'Valia',
//   numBooksPublished: 15
// };
//
// const customerFnParameters: Parameters<CreateCustomerFunctionType> = ['Anna', 33, 'Lviv'];
// createCustomer( ...customerFnParameters);


// /* Task 08.01. Class Decorators (sealed) */
// const obj = new UniversityLibrarian('Name1', 'Email1', 'Department1');
// console.log(obj);

// /* Task 08.02. Class Decorators that replace constructor functions (logger) */
// const fLibrarian = new UniversityLibrarian('Name2', 'Email2', 'Department2');
// fLibrarian.name = 'Anna';
// console.log(fLibrarian);
// // fLibrarian.printLibrarian(); // v0
// // (fLibrarian as any).printLibrarian(); // v1
// // fLibrarian['printLibrarian'](); // v2
// Object.getPrototypeOf(fLibrarian).printLibrarian.apply(fLibrarian);

// /* Task 08.03. Method Decorator (writable) */
// const obj = new UniversityLibrarian('Name1', 'Email1', 'Department1');
// obj.assistFaculty = function (){console.log('a')};
// obj.assistFaculty();
// //
// // // obj.teachCommunity = function (){console.log('b')};
// // // obj.teachCommunity();

// /* Task 08.04. Method Decorator (timeout) */
// const encyclopedia = new Encyclopedia('title', 2020, 3);
// console.log('08.04 timeout>>>');
// encyclopedia.printItem();
// console.log('<<<timeout 08.04');

// /* Task 08.05. Parameter Decorator (logParameter) */
// const obj = new UniversityLibrarian('Name1', 'Email1', 'Department1');
// obj.assistCustomer('Boris');

// /* Task 08.06. Property Decorator */
// const obj = new UniversityLibrarian('Name1', 'Email1', 'Department1');
// obj.name = 'TTT';
// console.log(obj.name);


// /* Task 08.07. Accessor Decorator */
// const encyclopedia = new Encyclopedia('title', 2020, 3);
// encyclopedia.copies = 10;
// encyclopedia.copies = 4.5;
// encyclopedia.copies = -10;
// encyclopedia.copies = 0;
// console.log(encyclopedia);

// /* Task 09.01. Callback Functions */
// console.log('>>> 09.01');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Angular, logCategorySearch);
// console.log('<<< 09.01');

// /* Task 09.02. Promises */
// console.log('>>> 09.02');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//       console.log(titles);
//
//       return titles.length;
//     })
//     .then(num => console.log('numOfBooks', num))
//     .catch(reason => console.log(reason));
// console.log('<<< 09.02');

/* Task 09.03. Async Functions */
console.log('>>> 09.03');
logSearchResults(Category.JavaScript)
  .catch(reason => console.log(reason));
console.log('<<< 09.03');
