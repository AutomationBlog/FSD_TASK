let numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.map(even));

function even(num) {
  if (num % 2 === 0) {
    return num ** 2;
  } else {
    return num ** 3;
  }
}
