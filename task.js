
//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//Find Factorial:

function factorial(num) {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

//Merge Objects:

function mergeObjects(obj1, obj2) {

    return { ...obj1, ...obj2 }
}

const obj1 = { fname: "hossam", lname: "esmail" }
const obj2 = { fname:"hossam ", lname: "hossam esmail" , age : 21 }
console.log(mergeObjects(obj1, obj2))



//Toggle Boolean:
function toggleBoolean(boolVal) {
    return !boolVal;
}

console.log(toggleBoolean(true));
console.log(toggleBoolean(false));