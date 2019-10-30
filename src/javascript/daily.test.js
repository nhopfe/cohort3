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

import { assertEquals, makeEmailArr, makeEmailObj, exampleForLoop, exampleWhileLoop, exampleDoWhileLoop, exampleForInLoop, exampleForOfLoop, spliceExample, sliceExample, forEachExample, mapExample, reduceExample, filterExample, sortExample, loopStaff, data, loopStaffOf, loopStaffIn, loopStaffForEach, loopStaffMap, totalOfBalances, averageOfBalances } from './daily'

// More Array Exercises Daily for 2019-10-29

test('return the average of the balances', () => {
    let testBalanceTotal = averageOfBalances([{ fname: "Who", lname: "Knows", balance: 1}, { fname: "Nobody", lname: "Cares", balance: 5}]);
    expect(testBalanceTotal).toEqual(3);
    let staffBalanceAverage = averageOfBalances(data.staff);
    expect(staffBalanceAverage).toEqual(546);
})

test('return the total of balances', () => {
    let testBalanceTotal = totalOfBalances([{ fname: "Who", lname: "Knows", balance: 1}, { fname: "Nobody", lname: "Cares", balance: 2}]);
    expect(testBalanceTotal).toEqual(3);
    let staffBalanceTotal = totalOfBalances(data.staff);
    expect(staffBalanceTotal).toEqual(3823);
})

// loopStaff each / map Daily for 2019-10-25

test('email builder for company for each', () => {
    const staffEmail = loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
})

test('email builder for company for each', () => {
    const staffEmail = loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
})

// loopStaff in / of Daily for 2019-10-24

test('email builder for company for in', () => {
    const staffEmail = loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('email builder for company for of', () => {
    const staffEmail = loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});



// // loopStaff Daily for 2019-10-21

test('email builder for company forEach', () => {
    const staffEmail = loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// Start of tests for More Array Work Daily for 2019, 10, 16-17

test('removing an element from a specific index of an array', () => {
    expect(sliceExample(1)).toStrictEqual([2, 3]);
    expect(sliceExample(2)).toStrictEqual([3]);
});

test('adding a value to a specific location in an array using splice', () => {
    expect(spliceExample(1, 5)).toStrictEqual([1,5,2,3]);
    expect(spliceExample(0, 0)).toStrictEqual([0,1,2,3]);
});

test('copying an array using for each', () => {
    expect(forEachExample(1, 1, 1)).toStrictEqual([1, 1, 1]);
    expect(forEachExample("one", "two", "three")).toStrictEqual(["one", "two", "three"]);
});

test('multiplying the elements of an array by a specified number and mapping those numbers to a new array', () => {
    expect(mapExample(2)).toStrictEqual([2, 4, 6]);
    expect(mapExample(10)).toStrictEqual([10, 20, 30]);
});

test('adding the sum of an array to a specified number using reduce', () => {
    expect(reduceExample(0)).toStrictEqual(6);
    expect(reduceExample(10)).toStrictEqual(16);
});

test('filtering an array for words that are smaller than a specified length', () => {
    expect(filterExample(3)).toStrictEqual(["hi"]);
    expect(filterExample(10)).toStrictEqual(["hi", "hello"]);
    expect(filterExample(20)).toStrictEqual(["hi", "hello", "pleasedToMeetYou"]);
});

test('sorting an array of given numbers by size', () => {
    expect(sortExample(3, 1, 2)).toStrictEqual([1, 2, 3]);
    expect(sortExample(2, 50, 0)).toStrictEqual([0, 2, 50]);
});

// Start of tests for More Array Work Daily for 2019, 10, 16-17

test('assertEquals', () => {
    expect(assertEquals("a", "b")).toBe(false);
    expect(assertEquals("a", "a")).toBe(true);
    expect(assertEquals(1, 2)).toBe(false);
    expect(assertEquals(2, 2)).toBe(true);
    expect(assertEquals("2", 2)).toBe(false);
    expect(assertEquals("This value", "This value")).toBe(true);
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

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

test('for loop putting attributes into an array', () => {
    expect(exampleForLoop(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(exampleForLoop("one", "two", "three")).toStrictEqual(["one", "two", "three"]);
});

test('while loop putting attributes into an array', () => {
    expect(exampleWhileLoop(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(exampleWhileLoop("one", "two", "three")).toStrictEqual(["one", "two", "three"]);
});

test('do while loop putting attributes into an array', () => {
    expect(exampleDoWhileLoop(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(exampleDoWhileLoop("one", "two", "three")).toStrictEqual(["one", "two", "three"]);
});

test('for in loop putting attributes into a new array', () => {
    expect(exampleForInLoop(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(exampleForInLoop("one", "two", "three")).toStrictEqual(["one", "two", "three"]);
});

test('for of loop putting attributes into a new array', () => {
    expect(exampleForOfLoop(1, 2, 3)).toStrictEqual([1, 2, 3]);
    expect(exampleForOfLoop("one", "two", "three")).toStrictEqual(["one", "two", "three"]);
});


// and before this comment ---

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");