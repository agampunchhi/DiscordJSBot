const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};
