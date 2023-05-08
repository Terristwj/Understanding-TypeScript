// 11) Types
var type1 = 1.3; // All numbers, int & float
var type2 = "a"; // Single quote '', Double quote "", Backtick ``
var type3 = true;
var type4;
var type5; // Array
var type6; // Tuple
var type7;
(function (type7) {
})(type7 || (type7 = {}));
var type8;
// 12) Checking Types
console.log(typeof type1);
console.log(typeof type1 === "number");
// 16) Types - Object
var object1 = {
    name: "Adam",
    age: 14,
};
console.log(object1.name);
// Explicit typing
var object2 = {
    name: "Shamus",
    age: 15,
};
console.log(object2.name);
// Literal typing
var object3;
object3 = {
    name: "James",
    age: 16,
};
console.log(object3.name);
// 18) Types - Arrays
var arr1;
arr1 = ["Sports"];
var arr2; // Not recommended
arr2 = ["String", 1, true];
var arr3 = [1, 2, 3];
// 19) Types - Tuples
var tup1 = [1, 2, 3];
var tup2;
// 20) Types - Enums
var RoleSet1;
(function (RoleSet1) {
    RoleSet1[RoleSet1["ADMIN"] = 0] = "ADMIN";
    RoleSet1[RoleSet1["USER"] = 1] = "USER";
})(RoleSet1 || (RoleSet1 = {}));
var personRole = RoleSet1.ADMIN;
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
var personRole2 = RoleSet3.ADMIN;
console.log(personRole2);
personRole2 = RoleSet3.USER;
console.log(personRole2);
// 22) Union Types
var unionVar = "a";
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
var sampleVar = "a";
sampleVar = 1;
var curMeal = "main course";
// 26) Function Return Types & 'void'
function undefinedFunction(n1, n2) {
    return;
}
// ': void' can be removed
function voidFunction() {
    console.log("Does nothing");
}
// 28) Function as Types
var printVoid = voidFunction;
printVoid();
printVoid = function () {
    console.log("Does something");
};
printVoid();
// Variable with fixed I/O function
var addTwoNumbers;
addTwoNumbers = function (n1, n2) {
    return n1 + n2;
};
console.log(addTwoNumbers(5, 5)); // OUT: 10
// 29) Function Types & Callbacks
// A callback is a function passed as an argument to another function
function addNumbersInArray(arr1, addNum) {
    var total = 0;
    arr1.forEach(function (num) {
        total = addNum(total, num);
    });
    return total;
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(addNumbersInArray(numberArray, addTwoNumbers)); // OUT: 45
// Above is the same as below
function addNumbersInArray2(arr1) {
    var total = 0;
    arr1.forEach(function (num) {
        total += num;
    });
    return total;
}
console.log(addNumbersInArray2(numberArray)); // OUT: 45
