var numbers = [1, 100, 50, 80, 10, 20];

function asc(x, y) {
  return x - y;
}

function desc(x, y) {
  return y - x;
}

function tri(numbers, order) {
  numbers.sort(order);
  return numbers;
}
console.log(tri(numbers, asc));
