// 11) Types
let type1: number = 1.3; // All numbers, int & float
let type2: string = "a"; // Single quote '', Double quote "", Backtick ``
let type3: boolean = true;
let type4: object;
let type5: string[]; // Array
let type6: [number]; // Tuple
enum type7 {}
let type8: any;

// 12) Checking Types
console.log(typeof type1);
console.log(typeof type1 === "number");

// 16) Types - Object
let object1 = {
  name: "Adam",
  age: 14,
};
console.log(object1.name);

// Explicit typing
let object2: {
  name: string;
  age: number;
} = {
  name: "Shamus",
  age: 15,
};
console.log(object2.name);

// Literal typing
let object3: {
  name: "James"; // Upon assigning, only accepts name: "James"
  age: number;
};
object3 = {
  name: "James",
  age: 16,
};
console.log(object3.name);

// 18) Types - Arrays
let arr1: string[];
arr1 = ["Sports"];
let arr2: any[]; // Not recommended
arr2 = ["String", 1, true];
let arr3 = [1, 2, 3];

// 19) Types - Tuples
let tup1: [number, number, number] = [1, 2, 3];
let tup2: [number, string, boolean];

// 20) Types - Enums
enum RoleSet1 {
  ADMIN,
  USER,
}
let personRole: number = RoleSet1.ADMIN;
console.log(personRole);

enum RoleSet2 {
  ADMIN = 50,
  USER,
}
personRole = RoleSet2.USER;
console.log(personRole);

// Using Unions with Enums
enum RoleSet3 {
  ADMIN = "administrator",
  USER = 15,
}
let personRole2: string | number = RoleSet3.ADMIN;
console.log(personRole2);
personRole2 = RoleSet3.USER;
console.log(personRole2);

// 22) Union Types
let unionVar: string | number = "a";
unionVar = 1;

// 23) Literal Types
function combine(
  input1: string | number,
  input2: string | number,
  conversionType: "as-number" | "as-string" // Literal Types
) {
  if (conversionType == "as-number") {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
console.log(combine(1, 2, "as-number"));
console.log(combine("Tom", "Sham", "as-number"));
console.log(combine("Tom", "Sham", "as-string"));

// 24) Type Alias / Custom Types
type combinable = string | number; // Custom type
let sampleVar: combinable = "a";
sampleVar = 1;
type mealType = "appetizer" | "main course"; // Custom type
const curMeal: mealType = "main course";

//
function myFunc1(n1: number, n2: number): undefined {
  return;
}
