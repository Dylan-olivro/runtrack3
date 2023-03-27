function sommenombrepremier(a, b) {
  a = Number(a);
  b = Number(b);

  isPrime = true;

  if (a > 1 && b > 1) {
    for (i = 2; i < a, i < b; i++) {
      if (a % i == 0 && b % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      console.log(a + b);
      return a + b;
    } else {
      console.log("L'un des nombres n'est pas premier.");
      return false;
    }
  }
}

sommenombrepremier(4, 11);

//   for (var i = 2; i < nbr; i++) {
//     if (nbr % i === 0) return false;
//     return i + nbr;
//   }
