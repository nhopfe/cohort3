import { calculateWinner, originFunc, fruitFunc, anon, provAgeLoop, assertEquals, makeEmailArr, makeEmailObj, exampleForLoop, exampleWhileLoop, exampleDoWhileLoop, exampleForInLoop, exampleForOfLoop, spliceExample, sliceExample, forEachExample, mapExample, reduceExample, filterExample, sortExample, loopStaff, data, loopStaffOf, loopStaffIn, loopStaffForEach, loopStaffMap, totalOfBalances, averageOfBalances, balancesGreaterThan1000, people, provLoop } from './daily'

// Destructuring-assignment Daily for 2019-11-26

test('testing calculateWinner function', () => {
    const board = ['X', 'X', 'X', 'O', 'O',,,,];
    expect(calculateWinner(board)).toBe('X');
    const board2 = ['X', 'X', null, 'O', 'O', 'O', null, null, null];
    expect(calculateWinner(board2)).toBe('O');
});


// Three ways of functions Daily for 2019-11-22

test('sort by number ascending via anonymous function', () => {
    const nums = anon();
    expect(nums[0].str).toBe("cantaloupe");
    expect(nums[1].str).toBe("lemons");
})

test('sort by fruit alphabetic via named function', () => {
    const fruit = fruitFunc();
    expect(fruit[0].str).toBe("apples");
    expect(fruit[1].str).toBe("avocados");
})

test('sort by origin reverse alphabetic via arrow function', () => {
    const origin = originFunc();
    expect(origin[0].str).toBe("pears");
    expect(origin[8].str).toBe("apples");
})

// Callback Exercise (Part2) Daily for 2019-11-21

test('create age object with provAgeLoop', () => {
    const prov = provAgeLoop(people);
    expect(prov.totalNumberOfPeople).toEqual(22);
    expect(prov.totalAgesOfPeople).toEqual(838);
    expect(prov.averageAgeOfPeople).toEqual(38);
})

// Callback Exercise (Part1) Daily for 2019-11-08

test('Albertans', () => {
    const prov = provLoop(people);
    expect(prov[0]).toEqual("Alex Smith");
    expect(prov[1]).toEqual("Angela Jones");
})

// More Array Exercises (Really) Daily for 2019-11-06

test('create array with balances >= 1000', () => {
    const staffData = data.staff;
    const testObjArr = [{ fname: "Test", lname: "Test2", balance: 1500}];
    expect(balancesGreaterThan1000(testObjArr)).toEqual([1500]);
    expect(balancesGreaterThan1000(staffData)).toEqual([1000, 1330]);
})

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