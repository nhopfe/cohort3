import functions from './syntax'
// define attributes / variables
    test('what type is attribute', () => {
        expect(functions.testForAttributeType(1)).toBe("number");
        expect(functions.testForAttributeType("test")).toBe("string");
        expect(functions.testForAttributeType(true || false)).toBe("boolean");
        expect(functions.testForArrays([])).toBe(true);
    });
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