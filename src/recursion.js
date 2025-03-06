/**
 * Factorial of n
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

/**
 * Print Name N times using Recursion
 */
function printName(n) {
  if (n > 0) {
    console.log("Vishesh", n);
    return printName(n - 1);
  }
}
// printName(4);

/**
 * Print 1 to N using Recursion
 */
function printNumbers(n) {
  if (n <= 0) {
    return;
  }

  printNumbers(n - 1);
  console.log(n);
}
// printNumbers(5);

/**
 * Print 1 to N using Recursion
 */
function print1toN(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  print1toN(n - 1);
}
// print1toN(5);

/**
 * Sum of first N Natural Numbers
 */
function sumOfFirstNNaturalNumbers(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumOfFirstNNaturalNumbers(n - 1);
}

/**
 * recursive function to reverse an array from l to r
 */
function reverseArray(arr, l, r) {
  if (l >= r) return;

  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseArray(arr, l + 1, r - 1);
}
let arr = [5, 4, 3, 2, 1];
reverseArray(arr, 0, arr.length - 1);

document.getElementById("app").innerHTML = `
<h1>factorial ${factorial(5)}</h1>
<h1>sumOfFirstNNaturalNumbers ${sumOfFirstNNaturalNumbers(5)}</h1>
<h1>reverseArray ${arr}</h1>
`;
