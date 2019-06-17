let octal: number = 0o7654321;
const mill = 1_000_000;
const interpol: string = `value: ${ mill }`;
let strArr1: string[] = ['a','b'];
let numStrArr2: Array<string | number> = ['a','b', 1];

let numArr: Array<number> = [1,2,3,4];
let roNumArr: ReadonlyArray<number> = [...numArr];
numArr = roNumArr as Array<number>;

// console.log(octal, mill, interpol, strArr1, numStrArr2, numArr);

// let myTuple: [number, string?, boolean?] = [25, 'string', true];
// console.log(myTuple);
// let myRestTuple: [number, ...string[]];


// enum Categories {JS, CSS=3, HTML, XML, A = 'UUU'};
// console.log(Categories);


// let notSure: any = 4;
// notSure = true;
// notSure = 'some string';
// console.log(notSure);

// function warnUser(): void {
//   console.info('ALARMA');
// }
// warnUser();


// let bigA: bigint = BigInt(100) + BigInt(7);
// // let bigB: bigint = 107n; // not supported yet
// console.log(bigA, typeof bigA); // 107n "bigint"

// let u: undefined = undefined; // ok
// let n: null = null; // ok
// console.log(u, n);
// Never
// function errFn(msg: string = 'err'): never {
//   throw error(`Error by errFn: ${ msg }`);
// }
// errFn();

/* TS10.1.p20 */

/* TS10.1.p21 */
// Type Unknown
// let x: unknown;
// x === 5;


/* TS10.02.p23 Type Assertions */
let someValue: any = 'bla-bla string';
let lengthOfSomeValue_v1: number = (<string>someValue).length;
let lengthOfSomeValue_v2: number = (someValue as string).length;
console.log(lengthOfSomeValue_v1, lengthOfSomeValue_v2);


/* TS10.02.p25 Intersection Types */
// function f(person: Person, account: Account): Person & Account {
//   let result = {...person, ...account};
//   return result;
// }

/* TS10.1.p26 Union Types: Primitives */
// function f(arg1: number | string, arg2: number | string): number | string {
//   // ...
//   return ; // ...
// }
// console.log(f(1,2), f('1','2'));

/* TS10.1.p27 Union Types: Primitives */






// /* TS10.2.p29 Union Types: Objects */
// class Bird {
//   fly(){}
//   layEggs(){}
// }
// class Fish {
//   swim(){}
//   layEggs(){}
// }
// function getPet(): Bird | Fish {
//   return new Bird();
// }
// const pet = getPet();
// pet.layEggs(); // ok
// // pet.fly(); // err
// (<Bird>pet).fly(); // ok
//
// /* TS10.2.p30 User-Defined Type Guards */
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined;
// }
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

/* TS10.2.p32 Type Aliases */
type Name = string;
type Runner = () => string;
type NameOrRunner = Name | Runner;

/* TS10.2.p33 String Literal Types */
// type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
// function animation(asing: Easing) {
//   // ...
// }
// animation('ease-in'); // ok
// animation('uneasy'); // err

/* TS10.2.p34 keyof (called "key query types") */
// const id = Symbol('id');
// interface Person {
//   [id]: number;
//   name: string;
//   age: number;
//   location: string;
// }
// const p: Person = {
//   [id]: 1,
//   name: 'Anna',
//   age: 16,
//   location: 'Kyiv'
// };
// type K = keyof Person; // uniq symbol, 'name', 'age', 'location'
// function f(k: K) {
//   console.log(p[K]);
// }
// f('name'); // 'Anna', ok
// f('fullName'); // err

// /* TS10.2.p35 Partial */
// const id = Symbol('id');
// interface Person {
//   [id]: number;
//   name: string;
//   age: number;
//   location: string;
// }
// // Err
// const p1: Person = { // err
//   name: 'Anna'
// };
//
// type PartialPerson = Partial<Person>;
//
//   // // equals to
//   // interface PartialPerson {
//   //   [id]?: number;
//   //   name?: string;
//   //   age?: number;
//   //   location?: string;
//   // }
//
// // Ok
// const p2: PartialPerson = {
//   name: 'Boris'
// };
//
// /* TS10.2.p36 Partial and Readonly*/
// const p3: Partial<Readonly<Person>> = {
//   name: 'Anna'
// };
// p3.name = 'Clara';
//

/** TS10.2.p37 TYPE INFERENCE ANDTYPE ANNOTATION */
/** TS10.2.p38 Type Inference */
// let firstString = 'first string';
// firstString = 42; // err
//
// function returnNumber() {
//   return 42;
// }
//
// let anotherString = 'this is another string';
// anotherString = returnNumber(); // error

/** TS10.2.p38 Type Annotation */
// let firstString: string = 'first string';
// firstString = 42; // err
//
// function returnNumber(): number {
//   return 42;
// }
//
// let anotherString: string = 'this is another string';
// anotherString = returnNumber(); // error
