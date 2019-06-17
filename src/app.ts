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
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript
    },
    {
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    },
    {
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    },
    {
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

function logFirstAvailable(books: Array<any>): void {
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

function getBookTitlesByCategory(category: Category): Array<string> {
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


// ========================================================================
/* TASK: 01 */
// logFirstAvailable(getAllBooks());

/* TASK: 02 */
logBookTitles(getBookTitlesByCategory(Category.JavaScript));


























