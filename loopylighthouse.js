const loopyLighthouse = function (range, multiples, words) {
  let output = [];
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      output.push(words[0] + words[1]);
    }
    else if (i % multiples[0] === 0) {
      output.push(words[0]);
    } else if (i % multiples[1] === 0) {
      output.push(words[1]);
    } else {
      output.push(i);
    }
  }
  for(let i = 0; i < output.length; i++){
    console.log(output[i]);
  }
};

loopyLighthouse([1, 10], [2, 3], ["lighthouse", "labs"]);
