function sommenombrepremier(a, b) {
  a = Number(a);
  b = Number(b);

  isPrime = true;

  if (a > 1 && b > 1) {
    for (i = 2; i < a, i < b; i++) {
      if (a % i == 0 || b % i == 0) {
        isPrime = false;
        return "L'un des nombres n'est pas premier.";
      }
    }
    if (isPrime) {
      return a + b;
    }
  }
}

console.log(sommenombrepremier(11,4));

//   for (var i = 2; i < nbr; i++) {
//     if (nbr % i === 0) return false;
//     return i + nbr;
//   }
