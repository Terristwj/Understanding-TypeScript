"use strict";
// Enable the following tsconfig.json to import
// - "allowImportingTsExtensions": true
// - "noEmit": true
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Shorthand Initialization
    // constructor(private name: string, private age: number) {
    // }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello! I am ${this.name}`);
    }
    //   Created my own copy function
    copy() {
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
    constructor(studID, name, age) {
        super(name, age);
        this.studID = studID;
    }
    // Overrides Person
    greet() {
        console.log("I am in debt");
    }
    // Overrides
    // this.name must be protected
    set setName(name) {
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
class Faculty extends Person {
}
// Singleton
// Object with only 1 instance value
// There can be multiple instances, but all same value
class School {
    constructor(school, area) {
        this.school = school;
        this.area = area;
    }
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
// Example class that implements two interfaces
// Class cannot inherit from multiple classes.
class Apple {
    constructor(price, sizes) {
        this.name = "apple";
        this.color = "red";
        this.price = price;
        this.sizes = sizes;
    }
    describe() {
        console.log(`A ${this.color} ${this.name} cost $${this.price.toFixed(2)}.`);
    }
    getSizes() {
        console.log(`Available sizes: ${this.sizes}`);
    }
}
new Apple(1.5, ["B", "M", "S"]).describe();
new Apple(1.5, ["B", "M", "S"]).getSizes();
