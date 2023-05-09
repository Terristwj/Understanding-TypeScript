// Enable the following tsconfig.json to import
// - "allowImportingTsExtensions": true
// - "noEmit": true

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Shorthand Initialization
  // constructor(private name: string, private age: number) {
  // }

  setName(name: string) {
    this.name = name;
  }

  greet(this: Person) {
    console.log(`Hello! I am ${this.name}`);
  }
}

// Creating an object
let adam = new Person("Adam", 13);
console.log(adam);
adam.greet();
console.log();

// Copying an object
// 'Spread' does not copy the functions
let shamus = Object.create({
  ...adam,
  setName: adam.setName,
  greet: adam.greet,
});
shamus.setName("Shamus");
console.log(shamus);
shamus.greet(); // Edited name to Shamus
adam.greet(); // Does not edit the orginal
console.log();
