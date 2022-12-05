import { getBusNumbers } from "./exercise002";

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined || !Array.isArray(arr)) throw new Error("sumMultiples(arr): arr is required");

  return arr.filter(value => ((value % 3 == 0) || (value % 5 ==0)) ).reduce((total, item)=> total+item, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("isValidDNA(str): str is required");
  // if (!(str instanceof String)) throw new Error("isValidDNA(str): str mujst be string");
  const regex = /^[ACGT]+$/;
  return regex.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the 
 * // complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. 
 * // So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("getComplementaryDNA(str): str is required");
  const basePair = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  };

  return str.split("").map(base => basePair[base] ).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("isItPrime(n): n is required");
  if (isNaN(n)) throw new Error("isItPrime(n): n must be a number");

  if (n < 4 ) return false;

  for (let i = 2; i <= n/2; i++) {
    if (n % i === 0) return false;
  }

  // If none of the above conditions are met, then n is a prime number
  return true;

};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
 // Create an empty array
 let matrix = [];

  // Use a loop to create n arrays, each filled with n items
  for (let i = 0; i < n; i++) {
    matrix.push(Array(n).fill(fill));
  }

  // Return the matrix
  return matrix;

};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (!Array.isArray(staff)) throw new Error("areWeCovered(staff, day): array staff is required");
  if (day === undefined) throw new Error("areWeCovered(staff, day): day is required");

  return staff.filter(s => s.rota.includes(day)).length >= 3;
};
