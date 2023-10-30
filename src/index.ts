const Friends = ["Ryan", "Kieran", "Mark"];

const output = Friends.map((item) => {
  // console.log(item.length);
  if (item.length === 4) {
    console.log(item);
    return item;
  } else return "";
});

console.log(output);
