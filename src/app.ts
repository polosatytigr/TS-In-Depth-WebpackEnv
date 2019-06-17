showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ========================================================================

interface IBook {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: IDamageLogger;
}

interface IDamageLogger {
  (reason: string): void;
}

interface IPerson {
  name: string;
  email: string;
}

interface IAuthor extends IPerson {
  numBooksPublished: number;
}

interface ILibrarian extends IPerson {
  department: string;
  assistCustomer: (custName: string) => void;
}


enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}


function getAllBooks(): Array<IBook> {
  let books: Array<IBook> = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

function logFirstAvailable(books = getAllBooks()): void {
  const numberOfBooks: number = books.length;
  let firstAvailabelTitle: string = '';

  for (const book of books) {
    if (book.available) {
      firstAvailabelTitle = book.title;
      break;
    }
  }

  console.log(`Numbers of books ${ numberOfBooks }`);
  console.log(`First available book title "${ firstAvailabelTitle }"`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

function logBookTitles(titles: string[]): void {
  titles.forEach(title => console.log(title));
  /* equal to */
  // for (const title of titles) {
  //   console.log(title);
  // }
}

function getBookByID(id: number): IBook | undefined{
  const books = getAllBooks();

  return books.find(book => book.id === id);
}

function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
  if (name) {
    console.log(`Customer Name: ${ name }`);
  }
  if (age) {
    console.log(`Customer Age: ${ age }`);
  }
  if (city) {
    console.log(`Customer City: ${ city }`);
  }
}

function сheckoutBooks(customer: string, ...bookIDs: number[]) {
  console.log(`Customer Name: ${ customer }`);

  const titles: string[] = [];

  for (const id of bookIDs) {
    const book = getBookByID(id);

    if (book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
  const books = getAllBooks();

  if (typeof bookProperty === 'string') {
    // get books by author and add to foundTitles
    return books
        .filter(book => book.author === bookProperty)
        .map(book => book.title);
  } else if (typeof bookProperty === 'boolean') {
    // get books by availability and add to foundTitles
    return books
        .filter(book => book.available === bookProperty)
        .map(book => book.title);
  }

  return [];
}

function printBook(book: IBook): void {
    console.log(`${ book.title } by ${ book.author }`);
}

class UniversityLibrarian implements ILibrarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void {
    console.log(`${ this.name } is assisting ${ custName }`);
  }
}

class ReferenceItem {
  // title: string;
  // year: number;
  // constructor(newTitle: string, newYear: number) {
  //   this.title = newTitle;
  //   this.year = newYear;
  //   console.log('Creating a new ReferenceItem...');
  // }

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  private _publisher: string;
  get publisher(): string {
    return this._publisher.toUpperCase();
  }
  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }
  static department: string = 'Fiction';
  printItem(): void {
    console.log(`${ this.title } was published in ${ this.year }`);
    console.log(`Departments: ${ ReferenceItem.department }`);
  }
}

class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: number) {
    super(title, year);
  }
  printItem(): void {
    super.printItem();
    console.log(`Edition: ${ this.edition } (${ this.year })`);
  }
}

// ========================================================================
/* TASK: 01. Basic Types */
// logFirstAvailable(getAllBooks());


/* TASK: 02. Enum */
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));


/* TASK: 03. Arrow Functions */
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));
// const book = getBookByID(2);
// console.log(book);


/* TASK: 04. Function Type */
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (arg1: string, arg2: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerID;
// myID = idGenerator('Ann', 100);
// console.log(myID);


/* TASK: 05. Optional, Default and Rest Parameters */
// createCustomer('Ann');
// createCustomer('Boris', 30);
// createCustomer('Clara', 25, 'Boston');
// createCustomer('Egor', undefined, 'Minsk');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);
// // myBooks.forEach(title => console.log(title));


/* TASK: 06. Function Overloading */
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
// // checkedOutBooks.forEach(title => console.log(title));


/* TASK: 07. Defining an Interface */
// const myBook: IBook = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

/* TASK: 08. Defining an Interface for Function Types */
// const logDamage: IDamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

/* TASK: 09. Extending Interface */
// const favoriteAuthor: IAuthor = {
//   name: 'authorName',
//   email: 'e@mail.comm',
//   numBooksPublished: 4
// };
// const favoriteLibrarian: ILibrarian = {
//   name: 'authorName',
//   email: 'e@mail.comm',
//   department: 'depName',
//   assistCustomer: (name: string) => console.log(name)
// };

/* TASK: 10. Interfaces for Class Types */
// const favoriteLibrarian: ILibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('someone');

/* TASK: 11. Creating and Using Classes */
// let ref: ReferenceItem = new ReferenceItem('TypeScript', 2019);
// ReferenceItem.department = 'Top Secret Department';
// ref.printItem();
// ref.publisher = 'should be in uppercase';
// console.log(ref.publisher, (<any>ref.constructor).department);

/*  */
const refBook: Encyclopedia = new Encyclopedia('EncTitle', 2019, 2);
refBook.printItem();