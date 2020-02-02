import {ReferenceItem} from "./reference-item";
import {positiveInteger} from "../decorators";

export default class Encyclopedia extends ReferenceItem {
  private _copies: number;

  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`)
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }

  @positiveInteger
  get copies() {
    return this._copies;
  }

  set copies(num) {
    this._copies = num;
  }
}