// test suites for exercise006
// not exhaustive, but I have tried to give a fair number of examples time permitting

import {
    sumMultiples, isValidDNA,  getComplementaryDNA, isItPrime, areWeCovered
} from "../challenges/exercise006";

describe('sumMultiples', () => {
    test('it returns return 0 when the input array is empty', () => {
        expect(sumMultiples([])).toBe(0);
    });

    // test the case where the input array has only one element
    test('it returns return the element itself when the input array has only one element that is a multiple of 3 or 5', () => {
        expect(sumMultiples([3])).toBe(3);
        expect(sumMultiples([-5])).toBe(-5);
        expect(sumMultiples([25])).toBe(25);
    });

    test('it returns return 0 when the input array has only one element that is not a multiple of 3 or 5', () => {
        expect(sumMultiples([2])).toBe(0);
        expect(sumMultiples([-11])).toBe(0);
        expect(sumMultiples([13])).toBe(0);
    });

    // test the case where the input array has multiple elements
    test('it returns the sum of the multiples of 3 or 5 in the input array', () => {
        expect(sumMultiples([3, 5, 15, 2, 7, 11])).toBe(23);
        expect(sumMultiples([3, 5, -10, 97, 15, 18, 20, 22])).toBe(51);
        expect(sumMultiples([5, 7, 11, 10, -15, 20, -25, 30, 35])).toBe(60);
    });

    // test the case where the input is not an array
    test('it should throw an error when the input is not an array', () => {
        expect(() => sumMultiples()).toThrowError("sumMultiples(arr): arr is required");
        expect(() => sumMultiples(null)).toThrowError("sumMultiples(arr): arr is required");
        expect(() => sumMultiples("hello")).toThrowError("sumMultiples(arr): arr is required");
        expect(() => sumMultiples(1)).toThrowError("sumMultiples(arr): arr is required");
        expect(() => sumMultiples({})).toThrowError("sumMultiples(arr): arr is required");
    });
});

describe('isValidDNA()', () => {
    test( 'it should return true for valid DNA strings', () => {
        expect(isValidDNA('ATGC')).toBe(true);
        expect(isValidDNA('TACG')).toBe(true);
        expect(isValidDNA('GGCTA')).toBe(true);
    });

    test( 'it should return false for invalid DNA strings', () => {
        expect(isValidDNA('hello')).toBe(false);
        expect(isValidDNA('ATCGZ')).toBe(false);
        expect(isValidDNA('atgc')).toBe(false);
    });

    test( 'it should throw an error if str is not provided', () => {
        expect(() => isValidDNA()).toThrowError('isValidDNA(str): str is required');
    });

//    test( 'it should throw an error if str is not a string', () => {
 //       expect(() => isValidDNA([])).toThrowError('isValidDNA(str): str must be a String');
 //       expect(() => isValidDNA0(0)).toThrowError('isValidDNA(str): str must be a String');
 //   });
});


describe('getComplementaryDNA()', () => {
    test ('it should return the complementary DNA string', () => {
        expect(getComplementaryDNA('ATGC')).toBe('TACG');
        expect(getComplementaryDNA('TACG')).toBe('ATGC');
        expect(getComplementaryDNA('GGCTA')).toBe('CCGAT');
    });

    test ('it should throw an error if str is not provided', () => {
        expect(() => getComplementaryDNA()).toThrowError('getComplementaryDNA(str): str is required');
    });
});

describe('isItPrime()', () => {
    test ('it should return false if not a prime', () => {
        expect(isItPrime(2)).toBe(false);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(-11)).toBe(false);
    });

    test ('it should return true if a prime', () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(15683)).toBe(true);
    });

    test ('it should throw an error if n is not provided', () => {
        expect(() => isItPrime()).toThrowError('isItPrime(n): n is required');
    });

    test ('it should throw an error if n is not a number', () => {
        expect(() => isItPrime("WOT")).toThrowError('isItPrime(n): n must be a number');
        expect(() => isItPrime([0, 12])).toThrowError('isItPrime(n): n must be a number');
    });
});

describe('isItPrime()', () => {
    test ('it should return false if not a prime', () => {
        expect(isItPrime(2)).toBe(false);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(-11)).toBe(false);
    });

    test ('it should return true if a prime', () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(15683)).toBe(true);
    });

    test ('it should throw an error if n is not provided', () => {
        expect(() => isItPrime()).toThrowError('isItPrime(n): n is required');
    });

    test ('it should throw an error if n is not a number', () => {
        expect(() => isItPrime("WOT")).toThrowError('isItPrime(n): n must be a number');
        expect(() => isItPrime([0, 12])).toThrowError('isItPrime(n): n must be a number');
    });
});

describe('areWeCovered()', () => {
    test ('it should return false if staff matrix is empty', () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });


    const staffNotCoveringAnyDay = [
        { name: "Sally", rota: ["Thursday", "Friday", "Saturday", "Sunday"]},
        { name: "Pedro", rota: ["Tuesday", "Wednesday"] },
        { name: "Julian", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
        { name: "Robert", rota: ["Saturday", "Sunday"] }
    ];

    
    
    test ('it should return false if staff not providing cover', () => {
        expect(areWeCovered(staffNotCoveringAnyDay, "Monday")).toBe(false);
        expect(areWeCovered(staffNotCoveringAnyDay, "Tuesday")).toBe(false);
        expect(areWeCovered(staffNotCoveringAnyDay, "Wednesday")).toBe(false);
        expect(areWeCovered(staffNotCoveringAnyDay, "Thursday")).toBe(false);
        expect(areWeCovered(staffNotCoveringAnyDay, "Friday")).toBe(false);
        expect(areWeCovered(staffNotCoveringAnyDay, "Saturday")).toBe(false);
        expect(areWeCovered(staffNotCoveringAnyDay, "Sunday")).toBe(false);
    });

    const staffCoveringEveryDay = [
            {name: "Sally", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Julian", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
            { name: "Robert", rota: ["Saturday", "Sunday"] },
            { name: "Bilbo", rota: ["Tuesday", "Thursday", "Friday", "Sunday"] },
            { name: "Baggins", rota: ["Monday", "Saturday", "Wednesday" ] }
    ];

    test ('it should return true if staff providing cover', () => {
        expect(areWeCovered(staffCoveringEveryDay, "Monday")).toBe(true);
        expect(areWeCovered(staffCoveringEveryDay, "Tuesday")).toBe(true);
        expect(areWeCovered(staffCoveringEveryDay, "Wednesday")).toBe(true);
        expect(areWeCovered(staffCoveringEveryDay, "Thursday")).toBe(true);
        expect(areWeCovered(staffCoveringEveryDay, "Friday")).toBe(true);
        expect(areWeCovered(staffCoveringEveryDay, "Saturday")).toBe(true);
        expect(areWeCovered(staffCoveringEveryDay, "Sunday")).toBe(true);
    });

    test ('it should throw an error if n is not provided', () => {
        expect(() => isItPrime()).toThrowError('isItPrime(n): n is required');
    });

    test ('it should throw an error if staff is not passed', () => {
        expect(() => areWeCovered(12, "WOT")).toThrowError('areWeCovered(staff, day): array staff is required');
    });

    test ('it should throw an error if day is not passed', () => {
        expect(() => areWeCovered(staffCoveringEveryDay)).toThrowError('areWeCovered(staff, day): day is required');
    });
});
