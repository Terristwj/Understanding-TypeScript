// 11) Types
let type1 = 1.3; // All numbers, int & float
let type2 = "a"; // Single quote '', Double quote "", Backtick ``
let type3 = true;
let type4;
let type5; // Array
let type6; // Tuple
var type7;
(function (type7) {
})(type7 || (type7 = {}));
let type8;
let type9; // Union
let type10; // Literal
let type12 = () => { }; // Function
let type13;
type13(type12); // Function w/ callback
let type14; // Unknown - More restrictive than 'any' (Must if-else check before using)
// Never - only used when the function never ends
function type15(errorMsg, code) {
    throw { message: errorMsg, errorCode: code };
}
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
let object2 = {
    name: "Shamus",
    age: 15,
};
console.log(object2.name);
// Literal typing
let object3;
object3 = {
    name: "James",
    age: 16,
};
console.log(object3.name);
// 18) Types - Arrays
let arr1;
arr1 = ["Sports"];
let arr2; // Not recommended
arr2 = ["String", 1, true];
let arr3 = [1, 2, 3];
// 19) Types - Tuples
let tup1 = [1, 2, 3];
let tup2;
// 20) Types - Enums
var RoleSet1;
(function (RoleSet1) {
    RoleSet1[RoleSet1["ADMIN"] = 0] = "ADMIN";
    RoleSet1[RoleSet1["USER"] = 1] = "USER";
})(RoleSet1 || (RoleSet1 = {}));
let personRole = RoleSet1.ADMIN;
console.log(personRole);
var RoleSet2;
(function (RoleSet2) {
    RoleSet2[RoleSet2["ADMIN"] = 50] = "ADMIN";
    RoleSet2[RoleSet2["USER"] = 51] = "USER";
})(RoleSet2 || (RoleSet2 = {}));
personRole = RoleSet2.USER;
console.log(personRole);
// Using Unions with Enums
var RoleSet3;
(function (RoleSet3) {
    RoleSet3["ADMIN"] = "administrator";
    RoleSet3[RoleSet3["USER"] = 15] = "USER";
})(RoleSet3 || (RoleSet3 = {}));
let personRole2 = RoleSet3.ADMIN;
console.log(personRole2);
personRole2 = RoleSet3.USER;
console.log(personRole2);
// 22) Union Types
let unionVar = "a";
unionVar = 1;
// 23) Literal Types
function combine(input1, input2, conversionType // Literal Types
) {
    if (conversionType == "as-number") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine(1, 2, "as-number"));
console.log(combine("Tom", "Sham", "as-number"));
console.log(combine("Tom", "Sham", "as-string"));
let sampleVar = "a";
sampleVar = 1;
const curMeal = "main course";
// 26) Function Return Types & 'void'
function undefinedFunction(n1, n2) {
    return;
}
// ': void' can be removed
function voidFunction() {
    console.log("Does nothing");
}
// 27) Function as Types
let printVoid = voidFunction;
printVoid();
printVoid = () => {
    console.log("Does something");
};
printVoid();
// Variable with fixed I/O function
let addTwoNumbers;
addTwoNumbers = (n1, n2) => {
    return n1 + n2;
};
console.log(addTwoNumbers(5, 5)); // OUT: 10
// 28) Function Types & Callbacks
// A callback is a function passed as an argument to another function
function addNumbersInArray(arr1, addNum) {
    let total = 0;
    arr1.forEach((num) => {
        total = addNum(total, num);
    });
    return total;
}
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(addNumbersInArray(numberArray, addTwoNumbers)); // OUT: 45
// Above is the same as below
function addNumbersInArray2(arr1) {
    let total = 0;
    arr1.forEach((num) => {
        total += num;
    });
    return total;
}
console.log(addNumbersInArray2(numberArray)); // OUT: 45
// 29) The 'unknown' Type
let itemUnkown;
let aString;
itemUnkown = "Can";
if (typeof itemUnkown === "string") {
    aString = itemUnkown;
}
// Unkown vs Any
let itemAny;
itemAny = "Cup";
aString = itemAny;
// 30) The 'never' Type
function neverEndingLoop() {
    while (true) { }
}
function generateError(msg, code) {
    throw { myMsg: msg, Errorcode: code };
}
try {
    var msg = generateError("My error", 555); // Code crashes here
}
catch (_a) {
    console.log(msg); // Undefined - No return value
    console.log("next line");
}
