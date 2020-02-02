import {Book} from "../intefaces";

export class Reader {
  private books: Book[] = [];
  constructor(public name: string) {
  }
  take(book: Book): void {
    this.books.push(book);
  }
}