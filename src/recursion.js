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

/**
 * recursive function to check palindrome string ABCDCBA, "madam", "racecar", and "12321"
 */
function checkPalindrome(palindrome, l, r, isPalin) {
  if (l >= r || !isPalin) return isPalin;

  return checkPalindrome(
    palindrome,
    l + 1,
    r - 1,
    palindrome[l] === palindrome[r]
  );
}
let pal = "12341";

/**
 * Print Fibonacci Series up to Nth term
 */
function getFibo(n) {
  if (n <= 1) return n;

  return getFibo(n - 1) + getFibo(n - 2);
}

function printFibonacciSeries(n) {
  let op = [];
  for (let i = 0; i <= n; i++) {
    op.push(getFibo(i));
  }
  return op;
}

document.getElementById("app").innerHTML = `
<h1>factorial ${factorial(6)}</h1>
<h1>sumOfFirstNNaturalNumbers ${sumOfFirstNNaturalNumbers(5)}</h1>
<h1>reverseArray ${arr}</h1>
<h1>checkPalindrome ${checkPalindrome(pal, 0, pal.length - 1, true)}</h1>
<h1>getFibo ${printFibonacciSeries(5)}</h1>
`;
