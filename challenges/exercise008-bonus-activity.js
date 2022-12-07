/*
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param   {String[]} stringArray - array of various strings
 * @returns {String[]} array containing each colour which is an element of stringArray
 */

export function printColours(stringArray) {
  if (!stringArray) throw new Error("colour is required");
  const colourNames = ["red", "yellow", "green", "blue", "orange", "purple", "red", "indigo", "violet", "puce"];
  return [...(new Set (stringArray))].filter(value => colourNames.includes(value));
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  return [...list, ...newItem]
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  return string.split("");
}

// Optional Chaining Bonus activity!
export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
  return (user.address == undefined ? undefined : user.address.postcode);
}
