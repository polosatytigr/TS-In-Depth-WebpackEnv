showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ========================================================================


/* TASK: 01 */
function getAllBooks(): Array<any> {
  let books:Array<any> = [
    {title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
    {title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false},
    {title: 'CSS Secrets', author: 'Lea Verou', available: true},
    {title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true}
  ];

  return books;
}

function logFirstAvailable(books: Array<any>): void {
  const numberOfBooks: number = books.length;
  let firstAvailabelTitle: string = '';

  // books.find((book: any))
  for (const book of books) {
    if (book.available) {
      firstAvailabelTitle = book.title;
      break;
    }
  }

  console.log(`Numbers of books ${ numberOfBooks }`);
  console.log(`First available book title "${ firstAvailabelTitle }"`);
}




// ========================================================================
/* TASK: 01 */
logFirstAvailable(getAllBooks());





























