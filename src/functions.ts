import {Book, LibMgrCallback} from "./intefaces";
import {Category} from "./enums";
import {BookOrUndefined, BookProperties} from "./types";

export function getAllBooks(): ReadonlyArray<Book> {
  const books: Array<Book> = [
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

export function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
  const numberOfBooks: number = books.length;
  let firstAvailableTtle: string = ''; // books.find((book) => book.available).title;
  for (const book of books) {
    if (book.available) {
      firstAvailableTtle = book.title;
      break;
    }
  }

  console.log(`Total books: ${numberOfBooks}`);
  console.log(`First Available title: ${firstAvailableTtle}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function logBookTitles(titles: Array<string>): void {
  titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
  const book = getAllBooks()[index];

  return [book.author, book.title];
}

export function calcTotalPages(): bigint {
  const libs: any[] = [{
    lib: 'libName1',
    books: 1_000_000_000,
    avgPagesPerBook: 250
  }, {
    lib: 'libName2',
    books: 5_000_000_000,
    avgPagesPerBook: 300
  }, {
    lib: 'libName3',
    books: 3_000_000_000,
    avgPagesPerBook: 280
  }];

  let total: bigint = BigInt(0);

  libs.forEach((lib) => {
    total += BigInt(lib.books * lib.avgPagesPerBook);
  });

  return total;
}

export function getBookByID(id: number): BookOrUndefined {
  const books = getAllBooks();

  return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`customer name: ${name}`);
  if (age) {
    console.log(`customer age: ${age}`);
  }
  if (city) {
    console.log(`customer city: ${city}`);
  }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`customer: ${customer}`);
  // /* v1 */
  // const titles: string[] = bookIDs.reduce((acc, bookID) => {
  //   const book = getBookByID(bookID);
  //   if (book.available) {
  //     acc.push(book.title);
  //   }
  //
  //   return acc;
  // }, []);

  /* v2 */
  const titles: string[] = [];
  for (const id of bookIDs) {
    const book = getBookByID(id);

    if (book && book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function getTitles(author: string): Book[];
export function getTitles(availability: boolean): Book[];
export function getTitles(id: number, available: boolean): Book[];
export function getTitles(...args: any[]): Book[] {
  let books: Book[] = [];

  if (args.length === 1) {
    const authorOrAvailability = args[0];
    if (typeof authorOrAvailability === 'string') {
      books = getAllBooks().filter(book => book.author === authorOrAvailability);
    }
    if (typeof authorOrAvailability === 'boolean') {
      books = getAllBooks().filter(book => book.available === authorOrAvailability);
    }
  }
  if (args.length === 2) {
    const id = args[0];
    const available = args[1];

    books = getAllBooks().filter(book => book.id === id && book.available === available);
  }

  return books;
}

export function assertStringValue(arg: any): boolean {
  if (typeof arg !== 'string') {
    throw('value should have been a string');
  }

  return true;
}

export function bookTitleTransform(title: any): string {
  assertStringValue(title);

  return title.split('').reverse().join('');
}

export function printBook(book: Book): void {
  console.log(`"${book.title}" by ${book.author}`);
}

export function getBookProp(book: Book, propertyName: BookProperties): any {
  return (typeof book[propertyName] === 'function') ? propertyName : book[propertyName];
}

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
    try {
      const bookTitles: string[] = getBookTitlesByCategory(category);
      if (bookTitles.length) {
        callback(null, bookTitles);
      } else {
        throw new Error('No books found.');
      }
    } catch (err) {
      callback(err, null);
    }
  }, 2000);
}

export const logCategorySearch: LibMgrCallback = function(err: Error, titles: string[]): void {
  if (err) {
    console.log(err.message);
  } else {
    console.log(titles);
  }
};

export function getBooksByCategoryPromise(category: Category): Promise<Array<string>> {
  const promise: Promise<Array<string>> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const bookTitles: string[] = getBookTitlesByCategory(category);
      if (bookTitles.length) {
        resolve(bookTitles);
      } else {
        reject('No books found.');
      }
    }, 2000);
  });

  return promise;
}

export async function logSearchResults(category: Category): Promise<any> {
  const titles = await getBooksByCategoryPromise(category);

  console.log(`Num of books in category "${Category[category]}": ${titles.length}`);
}