import {timeout} from "../decorators";

export abstract class ReferenceItem {
  /* v1 */
  // title: string;
  // year: number;
  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem...');
  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  private _publisher: string;
  static department: string = 'department initial value';

  /* v2 */
  protected constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }
  set publisher(value: string) {
    this._publisher = value;
  }

  @timeout(2000)
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department: "${ReferenceItem.department}"`);
  }

  abstract printCitation(): void;
}
