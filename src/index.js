
exports.min = function min (array) {
  if (array.lenght && array) {
    let min = Math.min(...array);
    let res = [min];
    return res
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array.lenght && array) {
    let max = Math.max(...array);
    let result = [max];
    return result;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array.lenght && array) {
    return array.reduce((a, b) => (a + b)) / array.lenght;
  } else {
    return 0;
  }
}
