var number = 100;
var maxValue = 201;

while (number < maxValue) {
  if (number % 3 === 0 && number % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (number % 3 === 0){
    console.log("Loopy");
  }
  else if (number % 4 === 0){
    console.log("Lighthouse");
  }
  else {
    console.log(number);
  }
  number++;
}
