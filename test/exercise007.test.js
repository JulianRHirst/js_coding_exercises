import {
    sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner
} from "../challenges/exercise007";

describe('sumDigits', () => {
    test('it returns single value when range ', () => {
        expect(sumDigits(0)).toBe(0);
    });

    test('it returns return the element itself when the input array has only one digit', () => {
        expect(sumDigits(3)).toBe(3);
        expect(sumDigits(5)).toBe(5);
        expect(sumDigits(9)).toBe(9);
    });

    test('it returns the sum of all digits', () => {
        expect(sumDigits([12345])).toBe(1+2+3+4+5);
        expect(sumDigits([1112312367564])).toBe(1+1+1+2+3+1+2+3+6+7+5+6+4);
        expect(sumDigits([13])).toBe(4);
    });


    test('it should throw an error when the input is not passed', () => {
        expect(() => sumDigits()).toThrowError("sumDigits(n): n is required");
    });


    test('it should throw an error when the input is not a number', () => {
        expect(() => sumDigits("L")).toThrowError("sumDigits(n): n must be a number");
        expect(() => sumDigits("DAJSDLJKASDL")).toThrowError("sumDigits(n): n must be a number");
    });


    test('it should throw an error when the input is negative', () => {
        expect(() => sumDigits(-121231)).toThrowError("sumDigits(n): n must be positive");
        expect(() => sumDigits(-5)).toThrowError("sumDigits(n): n must be positive");
    });
});

//
// createRange
//

describe('createRange', () => {

    test('it returns a single digit when start+step >= end', () => {
		expect(createRange(1, 1.5)).toStrictEqual([1]);
		expect(createRange(1, 4, 5)).toStrictEqual([1]);
    });

    test('works with mixes of integers and non-integers', () => {
        expect(createRange(1.5, 3.5)).toStrictEqual([1.5, 2.5, 3.5]);
		expect(createRange(1, 2.5, 0.5)).toStrictEqual([1, 1.5, 2.0, 2.5]);
		expect(createRange(1.5, 4, 0.5)).toStrictEqual([1.5, 2.0, 2.5, 3.0, 3.5, 4.0]);
    });

    test('works with negative numbers', () => {
        expect(createRange(-1, 1)).toStrictEqual([-1, 0, 1]);
		expect(createRange(-4, -1)).toStrictEqual([-4, -3, -2, -1]);
		expect(createRange(-4.5, -2.5, 0.5)).toStrictEqual([-4.5, -4, -3.5, -3, -2.5]);
    });

    test('it should throw an error when either of the first two parammeters are missing', () => {
        expect(() => createRange()).toThrowError("createRange(start,end,step=1): start and end are required");
		expect(() => createRange(0)).toThrowError("createRange(start,end,step=1): start and end are required");
    });

    test('it should throw an error when any parammeter is not a number', () => {
        expect(() => createRange("A", "A", "A")).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
		expect(() => createRange(1, 1, "A")).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
		expect(() => createRange(1, "A", 1)).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
		expect(() => createRange("A", 1, 1)).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
		expect(() => createRange(1, "A", "A")).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
        expect(() => createRange("A", 1, "A")).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
        expect(() => createRange("A", "A", 1)).toThrowError("createRange(start,end,step=1): all parameters must be numbers");
    });

    test('it should throw an error when the step is zero', () => {
        expect(() => createRange(1, 3, 0)).toThrowError("createRange(start,end,step=1): step must be non-zero");
    });
});


const testboards = [
    {
        board: [
            ["X", "X", "X"],
            ["X", "X", "X"],
            ["X", "X", "X"]
        ],
        winner: "X"
    },

    {
        board: [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ],
        winner: "0"
    },

    {
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        winner: null
    },

    {
        board: [
            ["X", "X", "X"],
            [null, null, null],
            [null, null, null]
        ],
        winner: "X"
    },
    {
        board: [
            [null, null, null],
            ["X", "X", "X"],
            [null, null, null]
        ],
        winner: "X"
    },
    {
        board: [
            [null, null, null],
            [null, null, null],
            ["X", "X", "X"]
        ],
        winner: "X"
    },


    {
        board: [
            ["0", "0", "0"],
            [null, null, null],
            [null, null, null]
        ],
        winner: "0"
    },

    {
        board: [
            [null, null, null],
            ["0", "0", "0"],
            [null, null, null]
        ],
        winner: "0"
    },
    {
        board: [
            [null, null, null],
            [null, null, null],
            ["0", "0", "0"]
        ],
        winner: "0"
    },
    {
        board: [
            ["X", null, null],
            ["X", null, null],
            ["X", null, null]
        ],
        winner: "X"
    },
    {
        board: [
            ["0", null, null],
            ["0", null, null],
            ["0", null, null]
        ],
        winner: "0"
    },

    {
        board: [
            ["0", null, null],
            ["0", null, null],
            ["X", null, null]
        ],
        winner: null
    }
    

]

describe('findWinner', () => {

    test('test of testBoards', () => {
        expect(findWinner(testboards[0].board) == testboards[0].winner).toBe(true);
        expect(findWinner(testboards[1].board) == testboards[1].winner).toBe(true);
        expect(findWinner(testboards[2].board) == testboards[2].winner).toBe(true);
        expect(findWinner(testboards[3].board) == testboards[3].winner).toBe(true);
        expect(findWinner(testboards[4].board) == testboards[4].winner).toBe(true);
        expect(findWinner(testboards[5].board) == testboards[5].winner).toBe(true);
        expect(findWinner(testboards[6].board) == testboards[6].winner).toBe(true);
        expect(findWinner(testboards[7].board) == testboards[7].winner).toBe(true);
        expect(findWinner(testboards[8].board) == testboards[8].winner).toBe(true);
        expect(findWinner(testboards[9].board) == testboards[9].winner).toBe(true);
        expect(findWinner(testboards[10].board) == testboards[10].winner).toBe(true);
        expect(findWinner(testboards[11].board) == testboards[11].winner).toBe(true);
    });


    test('it should throw an error when no board is passed', () => {
        expect(() => findWinner()).toThrowError("findWinner(board): board is required.");
    });


});

/*
//
// getScreentimeAlertList
//

const userScreenTimeArray = [
    {
    username: "beth_1234",
    name: "Beth Smith",
    screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
    {
    username: "sam_j_1989",
    name: "Sam Jones",
    screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
    },
    {
    username: "billy_1234",
    name: "Billy Smith",
    screenTime: [
            { date: "2019-05-01", usage: { twitter: 3, instagram: 2, facebook: 4} },
            { date: "2019-06-02", usage: { twitter: 156, instagram: 140, facebook: 131} },
            { date: "2019-06-04", usage: { twitter: 110, instagram: 156, facebook: 161} },
        ]
    },
    {
    username: "simon_j_1989",
    name: "Simon Jones",
    screenTime: [
            { date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-05-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-13", usage: { twitter: 132, instagram: 105, facebook: 9} },
            { date: "2019-05-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
    }
];

describe('getScreentimeAlertList', () => {


    test('test of test', () => {
        expect(getScreentimeAlertList(userScreenTimeArray, "2019-05-01")).toStrictlyEqual(["beth_1234", "billy_1234"]);
    });

});
*/