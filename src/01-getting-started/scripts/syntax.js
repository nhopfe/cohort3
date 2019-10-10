// define attributes / variables
const functions = {
    
    testForAttributeType: (p1) => {
        let p2 = typeof(p1);     
        return p2;
    },
    testForArrays: (p1) => {
        let p2 = Array.isArray(p1);
        return p2;
    },
    testForEqualValue: (p1) => {
        let mango = new Object ();
        mango.color = "yellow";
        if (p1 === mango.color) return true;
        return false;
    },
    testIfVariableIsUndefined: (p1) => {
        let p2 = typeof(p1);
        if (p2 === "undefined") return true;
        return false;
    },
    unshiftOnlyStringsToArray: (p1) => {
        let testUnshiftArray = ["this", "is", "a", "test", "array"];
        let p2 = typeof(p1);
        if (p2 === "string") {testUnshiftArray.unshift(p1); return "unshifted"};
        return "not a string";
    },
    pushOnlyNumbersToArray: (p1) => {
        let testPushArray = [3, 4, 5];
        let p2 = typeof(p1);
        if (p2 === "number") {testPushArray.push(p1); return "pushed"};
        return "not a number";
    },
    changeFirstValueInArrayIfString: (p1) => {
        let testChangeArray = ["Sam", "Fred", "Susy"];
        let p2 = typeof(p1);
        if (p2 === "string") {testChangeArray[0] = p1; return "changed"};
        return "not a string";
    },
    changeLoopConditionIfNumber: (p1) => {
        let p2 = typeof(p1);
        let items = 0;
        let i;
        if (p2 === "number" && p1 > 0) {for (i = 0; i < p1; i++) {items[i]}; return "condition changed"};
        if (p2 === "number" && p1 <= 0) return "number must be greater than 0";
        return "not a number";
    },
    deconstructingAnObjectWithForInLoop: (obj) => {
        let allObjectData = "";
        for (let key in obj) {
            allObjectData += `Key: ${key}, Value: ${obj[key]}\n`;
        }
        return allObjectData;
    },
    addAllNumbersWhileDownToZeroWithWhileLoop: (num) => {
        if (num <= 10 && num > 0) {
            let total = 0;
            let i = num;
            while (i > 0) {total += i; i--;}; return total};
        return "value must be a number between 1 and 10";
    },
    

};
    
export default functions;
    // string
    // boolean
    // array
    // dictionary / objects
    // undefined
// sample if / else
// functions
    // parameters
    // returns
// arrays
    // add to the front
    // add to the end
    // update values
// loops 
    // for
    // for/in
    // while
    // do while
    // forEach (with array and function)
// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value


