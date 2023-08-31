const range = function (start, end, step) {
  let output = [];

  if (end > start && step > 0) {
    for (let i = start; i <= end; i+=step){
      output.push(i);
    }
    return output;
  } else {
    return [];
  }
};

// const range = function (start, end, step) {
//   let output = [];
//   let i = 0;

//   if (end < start && step <= 0) {
//     console.log(output);
//   } else {
//     output.push(start);
//     while (output[i] < end && output[i] + step <= end) {
//       output.push(output[i] + step);
//       i++;
//     }
//     console.log(output);
//   }
// };

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
