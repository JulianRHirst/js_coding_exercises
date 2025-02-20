/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("sumDigits(n): n is required");
  if (isNaN(n)) throw new Error("sumDigits(n): n must be a number");
  if (n < 0) throw new Error("sumDigits(n): n must be positive");

  return String(n)
    .split("")
    .reduce((total, value) => total + parseInt(value), 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
  if (start === undefined || end === undefined)
    throw new Error(
      "createRange(start,end,step=1): start and end are required"
    );

  if (isNaN(step) || isNaN(start) || isNaN(end))
    throw new Error(
      "createRange(start,end,step=1): all parameters must be numbers"
    );

  if (step === 0)
    throw new Error("createRange(start,end,step=1): step must be non-zero");

  // Create an empty array
  let rangeArray = [];

  if (step > 0)
    for (let value = start; value <= end; value += step) rangeArray.push(value);
  else
    for (let value = start; value >= end; value += step) rangeArray.push(value);

  return rangeArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */

export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  // Couldn't get this working and it's almost 11pm!
    const usersForDate = users.filter(u => u.screenTime.some(d => (d.date === date) && (Object.values(d.usage).reduce((total, value)=>total+value, 0) >= 100)));
    
    // Use the map() method to extract the usernames of these users
    console.log( usersForDate.map(u => u.username ));
    return usersForDate.map(u => u.username);

};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexToRGB(hexStr): hexStr is required");
  const red = parseInt(hexStr.substring(0, 2), 16);
  const green = parseInt(hexStr.substring(2, 4), 16);
  const blue = parseInt(hexStr.substring(4,6), 16);
  return "rgb(" + red + "," + green + "," + blue + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */

export const findWinner = (board) => {
  // version 1

  if (board === undefined)
    throw new Error("findWinner(board): board is required.");

  for (let i = 0; i < 3; i++) {
    const rowText = board[i].join("");
    const colText = board[0][i] + board[1][i] + board[2][i];

    if (rowText === "XXX" || colText === "XXX") return "X";

    if (rowText === "000" || colText === "000") return "0";
  }

  const diagonal1 = board[0][0] + board[1][1] + board[2][2];
  const diagonal2 = board[0][2] + board[1][1] + board[2][0];

  if (diagonal1 === "XXX" || diagonal2 === "XXX") return "X";
  if (diagonal1 === "000" || diagonal2 === "000") return "0";

  return null;

  /*  

    for (let i = 0; i < 3; i++) {

      // check rows
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }


      // check columns
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }

    }
  
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
  
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }
  
    // No winner
    return null;
*/
};
