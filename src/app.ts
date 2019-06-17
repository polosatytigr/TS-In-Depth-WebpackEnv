showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ========================================================================

enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}


function getAllBooks(): Array<any> {
  let books:Array<any> = [
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

function getBookByID(id: number): any {
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

const myBooks = сheckoutBooks('Ann', 1, 2, 4);
myBooks.forEach(title => console.log(title));

















