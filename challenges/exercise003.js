export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(eachNumber => eachNumber * eachNumber );
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return (words.map((word, index) => index > 0 ? word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() : word.toLowerCase())).join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((total, person) => total + person.subjects.length, 0); 
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(recipe => recipe.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  // previous effort
  // return arr2.filter(x => arr1.includes(x)).sort() ;

  // Create a Set from arr1 to remove duplicates and make the search faster
  const set1 = new Set(arr1);

  // Create a Set of the numbers that appear in both arr1 and arr2, again removing duplicates
  const overlap = new Set(arr2.filter(value => set1.has(value)));

  // Convert the Set to an array and sort it in ascending order using spread to turn set overlap into array
  return [...overlap].sort((a, b) => a - b);

}