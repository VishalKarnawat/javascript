let arr = [7,1,5,3,8,2,5,9];

let output = arr.reduce((prev, curr) => {
  return prev > curr ? curr : prev;
});

console.log(output);
