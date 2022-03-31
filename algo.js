function suite(n) {
  let u0 = 0,
    u1 = 1,
    u2 = 2;
  let un = 0;

  if (n < 3) {
    un = n;
  } else {
    for (let i = 2; i < n; i++) {
      un = 2 * u2 + 3 * u0;
      u0 = u1;
      u1 = u2;
      u2 = un;
    }
  }

  return un;
}

console.log(suite(5));
