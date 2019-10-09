import functions from './syntax'
    test('what data type is attribute', () => {
        expect(functions.testForAttributeType(1)).toBe("number");
        expect(functions.testForAttributeType("test")).toBe("string");
        expect(functions.testForAttributeType(true || false)).toBe("boolean");
        expect(functions.testForArrays([])).toBe(true);
        expect(functions.testForArrays({})).toBe(false);
    });

    test('is the value "yellow" inside this object?', () => {
        expect(functions.testForEqualValue("yellow")).toBe(true);
        expect(functions.testForEqualValue("orange")).toBe(false);
        expect(functions.testForEqualValue(true)).toBe(false);
    });

    test('is the attribute variable undefined?', () => {
        let theFoo
        expect(functions.testIfVariableIsUndefined(1)).toBe(false);
        expect(functions.testIfVariableIsUndefined(theFoo)).toBe(true);
    });

    test('only unshift array if attribute is a string', () => {
        expect(functions.unshiftOnlyStringsToArray("1")).toBe("unshifted");
        expect(functions.unshiftOnlyStringsToArray(1)).toBe("not a string");
    });

    test('only push array if attribute is a number', () => {
        expect(functions.pushOnlyNumbersToArray(1)).toBe("pushed");
        expect(functions.pushOnlyNumbersToArray("1")).toBe("not a number");
    });

    test('only change first value in array if attribute is a string', () => {
        expect(functions.changeFirstValueInArrayIfString("1")).toBe("changed");
        expect(functions.changeFirstValueInArrayIfString(1)).toBe("not a string");
    });

    test('use a number to change loop condition', () => {
        expect(functions.changeLoopConditionIfNumber(1)).toBe("condition changed");
        expect(functions.changeLoopConditionIfNumber(0)).toBe("number must be greater than 0");
        expect(functions.changeLoopConditionIfNumber("1")).toBe("not a number");
    });
//this one still needs some work.
    test('deconstructing an object using a for/in loop', () => {
        const pets = {dog: "Shiloh", cat: "Zoe", horse: "Ben"};
        expect(functions.deconstructingAnObjectWithForInLoop(pets)).toBe(`Key: dog, Value: Shiloh\nKey: cat, Value: Zoe\nKey: horse, Value: Ben\n`);
        expect(functions.deconstructingAnObjectWithForInLoop(5)).toBe("");
    });

    test('counting down to zero with while loop', () => {
        expect(functions.deconstructingAnObjectWithForInLoop(11)).toBe(
        expect(functions.deconstructingAnObjectWithForInLoop("15")).toBe("");
        expect(functions.deconstructingAnObjectWithForInLoop(10)).toBe(
    });

// loops 
    // while
    // do while
    // forEach (with array and function)
// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value