const Friends = ["Ryan", "Kieran", "Mark"];

const output = Friends.map((item) => {
  // console.log(item.length);
  if (item.length === 4) {
    console.log(item);
    return item;
  } else return "";
});

console.log(output);

const filterName = (friendsNames: string[]): string[] => {
  let resultArray: string[] = []; // loop through the array to check if there is any element having a string length of four
  let strLength: number = 4;
  friendsNames.forEach((element) => {
    if (element.length === strLength) {
      // if the conditon is satisfied then return the result array with the lsit of names with 4 charaters
      resultArray.push(element);
    }
  });
  resultArray.length === 0
    ? console.log(
        `there were was no name(s) in ${friendsNames} that matched the criterion of four characters `
      )
    : "";

  return resultArray; // Return the result array after the loop
};

const friends: string[] = ["James", "Marylyn", "Moses", "Anne", "Fredy"];

let result = filterName(friends);
console.log(result);

//easy function

const filterFn = (arr, predicate) => {
  return arr.filter(predicate);
};

const predicateFn = (elem) => {
  return elem.length === 4;
};

const names = ["Ryan", "Kieran", "Jason", "Yous"];

const output1 = filterFn(names, predicateFn);

console.log(output);
