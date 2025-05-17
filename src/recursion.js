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
  if (n > 0) {
    console.log(n);
    return printNumbers(n - 1);
  }
}
// printNumbers(5);

/**
 * Print 1 to N using Recursion
 */
function print1toN(n) {
  if (n <= 0) {
    return;
  }
  print1toN(n - 1);
  console.log(n);
}
print1toN(5);

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

// function subsetSums(arr, N) {
//   let sumSubset = [];
//   func(0, 0, arr, N, sumSubset);
//   sumSubset.sort((a, b) => a - b); // Sort the array in ascending order
//   return sumSubset;
// }

function houserobber() {
  const nums = [1, 2, 3, 1];
  let pick, notpick;

  function getloot(index) {
    if (index === 0) return nums[index];

    if (index < 0) return 0;

    pick = getloot(index) + getloot(index - 2);
    notpick = 0 + getloot(index - 1);

    return Math.max(pick, notpick);
  }

  return getloot(nums.length - 1);
}

function printSubSequence(inputArr) {
  const output = [];
  function backtrackSequence(index, arr) {
    if (index === inputArr.length) {
      console.log(arr);
      return;
    }

    backtrackSequence(index + 1, [...arr, inputArr[index]]);
    backtrackSequence(index + 1, [...arr]);
  }

  backtrackSequence(0, []);
  return output;
}

function printSumSubSequence(inputArr, targetSum) {
  const output = [];
  function backtrackSequence(index, arr, targetSum) {
    if (index === inputArr.length) {
      if (targetSum === 0) {
        console.log([...arr]);
        output.push([...arr]);
      }
      return;
    }

    backtrackSequence(
      index + 1,
      [...arr, inputArr[index]],
      targetSum - inputArr[index]
    );
    backtrackSequence(index + 1, [...arr], targetSum);
  }

  backtrackSequence(0, [], targetSum);
  return output;
}

function comibinationSum() {
  const output = [];

  function getSubSet(index, ds, inputArr, n, output, tagretSum) {
    if (index === n) {
      if (tagretSum === 0) {
        output.push([...ds]);
        return;
      }
    }

    if (index === inputArr.length || tagretSum < 0) return;

    if (inputArr[index] <= tagretSum) {
      ds.push(inputArr[index]);
      getSubSet(index, ds, inputArr, n, output, tagretSum - inputArr[index]);
      ds.pop();
    }

    getSubSet(index + 1, ds, inputArr, n, output, tagretSum);
  }

  getSubSet(0, [], [2], [2].length, output, 1);

  console.log(output);
  return output;
}

function combinationsTwo(candidates, target) {
  const results = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start, ds, sum) {
    if (sum === target) {
      results.push([...ds]);
      return;
    }
    

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (sum + candidates[i] > target) break;

      ds.push(candidates[i]);
      backtrack(i + 1, ds, sum + candidates[i]);
      ds.pop();
    }
  }

  backtrack(0, [], 0);
  console.log("results", results);
  return results;
}


function getSubsetSum(candidates, N) {
  const results = [];

  function backtrack(index, sum) {
    if(index === N) {
      results.push(sum);
      return;
    }

    backtrack(index + 1, sum + candidates[index]);

    backtrack(index + 1, sum);
  }

  backtrack(0, 0);
  results.sort((a, b) => a - b);
  console.log("results", results)
  return results;
}

function getSubsetSum2(candidates) {
  const results = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start, ds) {

      results.push([...ds]);

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      ds.push(candidates[i]);
      backtrack(i + 1, ds);
      ds.pop();
    }

  }

  backtrack(0, []);
  console.log("results", results)
  return results;
}


function getPermutations(nums) {
  const results = [];

  function backtracking(start, ds) {
    if(start === nums.length) {
      results.push([...ds]);
      return;
    }

    for(let i = start; i < nums.length; i++) {
      ds.push(nums[i]);
      backtracking(i+1, ds);
      ds.pop();
    }
  }

  backtracking(0, []);
  console.log("results", results)
  return results;
}

/**
 * <h1>factorial ${factorial(6)}</h1>
<h1>sumOfFirstNNaturalNumbers ${sumOfFirstNNaturalNumbers(5)}</h1>
<h1>reverseArray ${arr}</h1>
<h1>checkPalindrome ${checkPalindrome(pal, 0, pal.length - 1, true)}</h1>
<h1>getFibo ${printFibonacciSeries(5)}</h1>
<h1>subsetSums ${subsetSums([1, 2, 3], 3)}</h1>
<h1>subsetSums ${printSubSequence([ 3, 1, 2 ])}</h1>
<h1>subsetSums ${printSumSubSequence([1, 2, 1], 2)}</h1>
<h1>comibinationSum${comibinationSum()}</h1>
<h1>subsetSums ${printSumSubSequence([1, 2, 1], 2)}</h1>
<h1>subsetSums ${combinationsTwo([10, 1, 2, 7, 6, 1, 5], 8)}</h1>
<h1>subsetSums ${getSubsetSum2([1,2,2])}</h1>

 */

document.getElementById("app").innerHTML = `
<h1>subsetSums ${getPermutations([1,2,2])}</h1>
`;

// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
