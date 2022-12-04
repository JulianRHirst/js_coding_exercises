import { getBusNumbers } from "./exercise002";

export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const index = nums.indexOf(n);
  return index === -1 || index == (nums.length -1) ? null : nums[index+1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return { 1: str.split("1").length -1 , 0: str.split("0").length -1};
  
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number(String(n).split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.reduce( (grandTotal, subArray) => grandTotal + subArray.reduce((subTotal, value) => value + subTotal, 0 ) , 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  const temp = arr[0];
  arr[0]=arr[arr.length-1];
  arr[arr.length-1] = temp;

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  // check each property in turn
  for (const property in haystack) {

    // Check if the property is a string and contains the search term
    if (typeof haystack[property] === "string" && haystack[property].toLowerCase().includes(searchTerm.toLowerCase())) {

      // i know, exiting within a loop - bad me!
      return true;
    }
  }

  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const wordFrequencies = {};

  const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const charactersWithoutPunctuation = str.split("").filter(char => !punctuation.includes(char));
  const lowerCaseWords = charactersWithoutPunctuation.join("").toLowerCase().split(" ");
  
  lowerCaseWords.forEach(word => {
    if (wordFrequencies[word]) {
      wordFrequencies[word]++;
    } else {
      wordFrequencies[word] = 1;
    }
  });

  return wordFrequencies;
};
