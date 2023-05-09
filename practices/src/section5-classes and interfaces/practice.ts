// Enable the following tsconfig.json to import
// - "allowImportingTsExtensions": true
// - "noEmit": true

class Person {
  protected name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Shorthand Initialization
  // constructor(private name: string, private age: number) {
  // }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  greet(this: Person) {
    console.log(`Hello! I am ${this.name}`);
  }

  //   Created my own copy function
  copy(this: Person) {
    // console.log({...this});
    return new Person(this.name, this.age);
  }
}

// Creating an object
let adam = new Person("Adam", 13);
console.log(adam);
adam.greet();
console.log();

// Copying an object - Is complex
// 'Spread' does not copy the functions
let shamus = adam.copy(); // Using my own copy() function
shamus.setName = "Shamus";
console.log(shamus);
shamus.greet(); // Edited name to Shamus
adam.greet(); // Does not edit the orginal
console.log();

// Inheritance
class Student extends Person {
  private studID: number;
  constructor(studID: number, name: string, age: number) {
    super(name, age);
    this.studID = studID;
  }

  // Overrides Person
  greet(this: Person): void {
    console.log("I am in debt");
  }

  // Overrides
  // this.name must be protected
  set setName(name: string) {
    this.name = `${this.studID.toString()}_${name}`;
  }

  //   Only accessible from the class object.
  //   Not object instance
  static whereAmI() {
    console.log("School");
  }
}

let jacob = new Student(1, "Jacob", 10);
console.log(jacob.getName);
jacob.setName = jacob.getName;
console.log(jacob.getName);
Student.whereAmI();

// Abstracts
// Cannot be initialized
// Used as super classes to share common properties and functions to sub classes
abstract class Faculty extends Person {
  abstract staffID: number;
  abstract getStudents(): string[];
}

// Singleton
// Object with only 1 instance value
// There can be multiple instances, but all same value
class School {
  private static instance: School;
  private constructor(private school: string, private area: string) {}

  // Creates a default instance
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new School("smu", "sg");
    return this.instance;
  }
}
const school1 = School.getInstance();
console.log(school1);
const school2 = School.getInstance();
console.log(school2);

// Interfaces - Type but for classes
// Metadata of a class
interface Fruit {
  readonly name: string;
}
interface Colored {
  color: string;
}
interface OnSale {
  price: number;
}
interface MultiSizes {
  sizes: string[];
}
// Interface can inherit from multiple interfaces.
interface FruitOnSale extends Fruit, Colored, OnSale {}

// Example class that implements two interfaces
// Class cannot inherit from multiple classes.
class Apple implements MultiSizes, FruitOnSale {
  // Must have FruitOnSale(name, color, price)
  // and MultiSizes(price)
  name: string;
  color: string;
  price: number;
  sizes: string[];

  constructor(price: number, sizes: string[]) {
    this.name = "apple";
    this.color = "red";
    this.price = price;
    this.sizes = sizes;
  }

  describe(this: Apple) {
    console.log(`A ${this.color} ${this.name} cost $${this.price.toFixed(2)}.`);
  }
  getSizes(this: Apple): void {
    console.log(`Available sizes: ${this.sizes}`);
  }
}
new Apple(1.5, ["B", "M", "S"]).describe();
new Apple(1.5, ["B", "M", "S"]).getSizes();
