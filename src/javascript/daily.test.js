/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

import {assertEquals, makeEmailArr} from './daily'

test('assertEquals', () => {
    expect(assertEquals("a","b")).toBe(false);
    expect(assertEquals("a","a")).toBe(true);
    expect(assertEquals(1,2)).toBe(false);
    expect(assertEquals(2,2)).toBe(true);
    expect(assertEquals("2",2)).toBe(false);
    expect(assertEquals("This value","This value")).toBe(true);
});

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});



// and before this comment ---

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");