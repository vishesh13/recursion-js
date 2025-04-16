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

/**
 *  Subset Sum I
 */
function func(index, sum, arr, N, sumSubSet) {
  if (index === N) {
    sumSubSet.push(sum);
    return;
  }

  func(index + 1, sum + arr[index], arr, N, sumSubSet);

  func(index + 1, sum, arr, N, sumSubSet);
}

function subsetSums(arr, N) {
  let sumSubset = [];
  func(0, 0, arr, N, sumSubset);
  sumSubset.sort((a, b) => a - b); // Sort the array in ascending order
  return sumSubset;
}

function houserobber() {
  const nums = [1, 2, 3, 1];
  const dp = new Array(nums.length).fill(-1);

  function getloot(index, dp) {
    if (index === 0) return nums[index];

    if (index < 0) return 0;

    if (dp[index] !== -1) return dp[index];

    const pick = nums[index] + getloot(index - 2, dp);
    const notpick = 0 + getloot(index - 1, dp);

    return (dp[index] = Math.max(pick, notpick));
  }

  return getloot(nums.length - 1, dp);
}

/**
 * <h1>factorial ${factorial(6)}</h1>
<h1>sumOfFirstNNaturalNumbers ${sumOfFirstNNaturalNumbers(5)}</h1>
<h1>reverseArray ${arr}</h1>
<h1>checkPalindrome ${checkPalindrome(pal, 0, pal.length - 1, true)}</h1>
<h1>getFibo ${printFibonacciSeries(5)}</h1>
<h1>subsetSums ${subsetSums([1, 2, 3], 3)}</h1>
 */

document.getElementById("app").innerHTML = `
<h1>houserobber ${houserobber()}</h1>
`;
