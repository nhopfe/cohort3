/*
    Sample data for the next few exercises.
*/


export const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

// Callback Exervise (Part2) Daily for 2109-11-21

export const provAgeLoop = (array) => {
        const west = array.filter(elem => 
                {return elem.province == "AB" || elem.province == "BC"});
        const agesArr = west.map(elem =>
                {return elem.age});
        const totalPeople = agesArr.length;
        const totalAge = agesArr.reduce((accumulator, currentValue) => accumulator + currentValue);
        const averageAge = Math.round(totalAge / totalPeople);

        return {totalNumberOfPeople: totalPeople, totalAgesOfPeople: totalAge, averageAgeOfPeople: averageAge};
}

// Callback Exercise (Part1) Daily for 2019-11-08

export const provLoop = (array) => {
        const west = array.filter(elem => 
            {return elem.province == "AB" || elem.province == "BC"});
        const mapArr = west.map(elem => 
            {return `${elem.fname} ${elem.lname}`});
        return mapArr;
};

/*
    Sample data for the next few exercises.
*/

export const data = {
        staff: [
                { fname: "Jane", lname: "Smith", balance: 10 },
                { fname: "Liam", lname: "Henry", balance: 1000 },
                { fname: "Emma", lname: "Jones", balance: 1330 },
                { fname: "Olivia", lname: "Notly", balance: 310 },
                { fname: "Noah", lname: "Ho", balance: 503 },
                { fname: "William", lname: "Lee", balance: 520 },
                { fname: "Benjamin", lname: "Amis", balance: 150 },
        ],
        company: "EvolveU",
        city: "Calgary",
        prov: "Alberta"
};


/*	
        Loop through data.staff object sending each staff memeber to the makeEmailObj to
         create an email array.
        Then the test should be able to read that new array in order to get the desired email
        address. 
*/

// Start of More Array Exercises (Really) Daily for 2019-11-06

export const balancesGreaterThan1000 = (objArr) => {
        const balanceArray = objArr.filter(objArr => objArr.balance >= 1000);
        const largeNumberArr = balanceArray.map(a => a.balance);
        return largeNumberArr;
}

// Start of More Array Exercises Daily for 2019-10-29

export const averageOfBalances = (objArr) => {
        let sum = objArr.reduce(function(total, currentValue) {
                return total + currentValue.balance;
        }, 0);
        return Math.round(sum / objArr.length);
}

export const totalOfBalances = (objArr) => {
        let sum = objArr.reduce(function(total, currentValue) {
                return total + currentValue.balance;
        }, 0);
        return sum;
}

// Start of loopStaff each / map Daily for 2019-10-25

export const loopStaffMap = (objArr) => {
        let staffEmail = [];
        objArr.map(staffMember => {
                staffEmail.push(makeEmailObj(staffMember));
        })
        return staffEmail;
}

export const loopStaffForEach = (objArr) => {
        let staffEmail = [];
        objArr.forEach(staffMember => {
                staffEmail.push(makeEmailObj(staffMember));
        })
        return staffEmail;
}

// Start of loopStaff in / of Daily for 2019-10-24
export const loopStaffIn = (objArr) => {
        let staffEmail = [];
        let staffMember;
        for (staffMember in objArr) {
                staffEmail.push(makeEmailObj(objArr[staffMember]));
        }
        return staffEmail;
}

export const loopStaffOf = (objArr) => {
        let staffEmail = [];
        let staffMember;
        for (staffMember of objArr) {
                staffEmail.push(makeEmailObj(staffMember));
        }
        return staffEmail;
}

// Start of loopStaff Daily for 2019-10-21
export const loopStaff = (objArr) => {
        let staffEmail = [];
        objArr.forEach(staffMember => {
                staffEmail.push(makeEmailObj(staffMember));
        })
        return staffEmail;
}



// Start of More Array Work Daily for 2019-10-16&17

export const sliceExample = (p1) => {
        let defaultArray = [1, 2, 3];
        let newArray = [];
        newArray = defaultArray.slice(p1);
        return newArray;
}

export const spliceExample = (a, b) => {
        let defaultArray = [1, 2, 3];
        defaultArray.splice(a, 0, b);
        return defaultArray;
}

export const forEachExample = (a, b, c) => {
        let defaultArray = [a, b, c];
        let newArray = [];
        defaultArray.forEach((num) => { newArray.push(num) });
        return newArray;
}

export const mapExample = (p1) => {
        let defaultArray = [1, 2, 3];
        let newArray = [];
        const mapArr = defaultArray.map(x => x * p1);
        newArray = mapArr;
        return newArray;
}

export const reduceExample = (p1) => {
        let defaultArray = [1, 2, 3];
        let reducer = (accumulator, num) => accumulator + num;
        return defaultArray.reduce(reducer, p1);
}

export const filterExample = (p1) => {
        let defaultArray = ["hi", "hello", "pleasedToMeetYou"];
        let newArray = defaultArray.filter(num => num.length < p1);
        return newArray;
}

export const sortExample = (a, b, c) => {
        let defaultArray = [a, b, c];
        defaultArray.sort((x, y) => x - y);
        return defaultArray;
}

// End of More Array Work Daily for 2019, 10, 16-17

export const assertEquals = (a, b) => {
        if (a === b) return true;
        if (a !== b) console.log("*** the two values are not the same: \n   p1--> " + a + "\n   p2--> " + b);
        return false;
}

export const makeEmailArr = (arr) => {
        return arr[0].toLowerCase() + "." + arr[1].toLowerCase() + "@evolveu.ca";
}

export const makeEmailObj = (obj) => {
        return obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca";
};

export const exampleForLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i;
        for (i = 0; i < defaultArray.length; i++) {
                newArray[i] = defaultArray[i];
        }
        return newArray;
}

export const exampleWhileLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i = 0;
        while (i < defaultArray.length) {
                newArray[i] = defaultArray[i];
                i++;
        }
        return newArray;
}

export const exampleDoWhileLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i = 0;
        do { newArray[i] = defaultArray[i]; i++; }
        while (i < defaultArray.length);
        return newArray;
}

export const exampleForInLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i;
        for (i in defaultArray) {
                newArray[i] = defaultArray[i];
        }
        return newArray;
}

export const exampleForOfLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let x;
        for (x of defaultArray) {
                newArray.push(x);
        }
        return newArray;
}