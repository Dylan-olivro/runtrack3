var nombres = [1, 100, 50, 80, 10, 20];

function asc(x, y) {
  return x - y;
}

function desc(x, y) {
  return y - x;
}

function tri(nombres, order) {
  nombres.sort(order);
  return nombres;
}
console.log(tri(nombres, asc));
