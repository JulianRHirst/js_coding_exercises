// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍
export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (isNaN(originalPrice)) throw new Error("originalPrice is not a number");
  if (isNaN(vatRate)) throw new Error("vatRate is not a number");
  // originall tried this but it wouldn't work! 
  // return ((originalPrice * (100 + vatRate)) / 100).toFixed(2);
  return Math.round(originalPrice * (100 + vatRate)) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  if (isNaN(originalPrice)) throw new Error("originalPrice is not a number");
  if (isNaN(reduction)) throw new Error("reduction is not a number");
  if (reduction > 100) throw new Error("reduction is greater than 100");

  // originall tried this but it wouldn't work :(
  // return ((originalPrice * (100 - reduction)) / 100).toFixed(2);
  return Math.round(originalPrice * (100 - reduction)) / 100;
  
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const middle = Math.floor(str.length / 2);
  return str.length % 2 == 0 ? str.charAt(middle-1) + str.charAt(middle) : str.charAt(middle);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  
  // working: 
  //const splitIntoSubStrings = word.split("");
  // ["h", "e", "l", "l", "o"]
  // const reverseSubStrings = splitIntoSubStrings.reverse(); 
  // ["o", "l", "l", "e", "h"]
  // reversedString = reverseSubStrings.join("");
  // "olleh"

  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  return (words.map(eachword=> eachword.split('').reverse().join('')));
  
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  return users.filter(eachUser => eachUser.type === 'Linux').length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");


  // tried to use this but it would not work with test cases
  // return (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);

  return Math.round(100* (scores.reduce((sum, score) => sum + score, 0) / scores.length))/100;
  
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  const isDivisibleBy3 = (n % 3 === 0);
  const isDivisibleBy5 = (n % 5 === 0);

  return isDivisibleBy3 ? (isDivisibleBy5 ? "fizzbuzz" : "fizz") : (isDivisibleBy5 ? "buzz" : n)

}
