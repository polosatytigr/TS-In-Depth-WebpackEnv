import * as Interfaces from "../intefaces";
import {format, logger, logMethod, logParameter, sealed, writable} from "../decorators";

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
  @format()
  name: string;

  constructor(name: string, public email: string, public department: string) {
    this.name = name;
  }

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  };

  @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}
