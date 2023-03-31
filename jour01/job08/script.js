function sommenombrepremier(a, b) {
  a = Number(a);
  b = Number(b);

  isPrimeNumber = true;

  if (a > 1 && b > 1) {
    for (i = 2; i < a, i < b; i++) {
      if (a % i == 0 || b % i == 0) {
        isPrimeNumber = false;
        return "L'un des nombres n'est pas premier.";
      }
    }
    if (isPrimeNumber) {
      return a + b;
    }
  }
}

// console.log(sommenombrepremier(11, 3));

document.addEventListener("submit", sommenombrepremier);
