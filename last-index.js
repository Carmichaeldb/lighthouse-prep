  const lastIndexOf = function (array, value) {
    let arr = array;
    let result = null;
    const num = value;

    if (arr.length === 0) {
      result = -1;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
          result = i;
        } 
        else if (i < arr.length && result === null) {
        result = -1;
        }
      }
    }
    console.log(result);
    return result;
  };

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);
lastIndexOf([ 5, 5, 5 ], 5);
lastIndexOf([], 3);
