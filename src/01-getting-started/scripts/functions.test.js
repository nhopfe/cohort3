import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(101)).toBe("extra large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(101, 202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(2, 1)).toBe(1);
    expect(functions.subtract(333, 222)).toBe(111);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(1, 2)).toBe(2);
    expect(functions.multiply(2, 202)).toBe(404);
});

test('Does that divide function work?', () => {
    expect(functions.divide(2, 1)).toBe(2);
    expect(functions.divide(303, 101)).toBe(3);
});

test('testing the taxes function', () => {
    expect(functions.taxes(1)).toBe(.15);
    expect(functions.taxes(2)).toBe(.30);
    expect(functions.taxes(50000)).toBe(7630.35);
    expect(functions.taxes(100000)).toBe(18141.11);
    expect(functions.taxes(150000)).toBe(31211.10);
    expect(functions.taxes(250000)).toBe(61796.26);
});

test('testing the Working with Arrays button', () => {
    expect(functions.workingWithArraysAdd("Foo")).toBe("Input is not a valid number");
    expect(functions.workingWithArraysAdd(1)).toBe(1 + " has been added to the array");
});

