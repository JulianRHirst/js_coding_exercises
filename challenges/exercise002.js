export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const peoplePerBus = 40;
  return Math.floor(people/peoplePerBus) + (people%peoplePerBus===0 ? 0 : 1 );
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(eachString => eachString === 'sheep').length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const postcode = String(person.address.postCode);

  // manchester post code - first character is M, second character is number
  return postcode.charAt(0).toUpperCase() === "M" && (postcode.charAt(1).match(/[0-9]/)!==null);
}
