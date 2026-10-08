
// The mixed array
const mixedArray = ['PIZZA', 1, true, null, [13, 19], 'Wings', 'Master', 'Anime', false, 9];


lowerCaseWords(mixedArray)
  .then(result => console.log(result))   // log the result if the promise is resolved
  .catch(err => console.error(err.message));

function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    const lowerCaseArray = arr
      .filter(item => typeof item === 'string') //turning the strings in the array to lower case
      .map(item => item.toLowerCase());

      // if no lowercase strings are found, reject the promise with an error message
    if (lowerCaseArray.length > 0) {
      resolve(lowerCaseArray);
    } else {
      reject(new Error("No strings found"));
    }
  });
}




