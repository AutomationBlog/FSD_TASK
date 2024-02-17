//**************************** a. Print odd numbers in an array ****************************
const input1 = 20;
let output1 = ((num) => {
  let oddArray = [];
  for (let index = 0; index < num; index++) {
    if (index % 2 !== 0) {
      oddArray.push(index);
    }
  }
  return oddArray;
})(input1);
console.log("TASK: Print odd numbers in an array");
console.log("INPUT ::: " + input1);
console.log("OUTPUT ::: " + output1);
console.log("*****************************************************");

//**************************** b. Convert all the strings to title caps in a string array ****************************
const input2 = "convert all the strings to title caps in a string array";
let output2 = ((str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
})(input2);
console.log("TASK: Convert all the strings to title caps in a string array");
console.log("INPUT ::: " + input2);
console.log("OUTPUT ::: " + output2);
console.log("*****************************************************");

//**************************** c. Sum of all numbers in an array ****************************
const input3 = [1, 2, 3, 4, 5];
let output3 = ((arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
})(input3);
console.log("TASK: Sum of all numbers in an array");
console.log("INPUT ::: " + input3);
console.log("OUTPUT ::: " + output3);
console.log("*****************************************************");

//**************************** d. Return all the prime numbers in an array ****************************
const input4 = 20;
let output4 = ((num) => {
  let prime = [];
  let count = 0;
  for (let j = 2; j <= num; j++) {
    for (i = 1; i <= j; i++) {
      if (j % i == 0) {
        count++;
      }
    }
    if (count == 2) {
      prime.push(j);
    }
    count = 0;
  }
  return prime;
})(input4);
console.log("TASK: Return all the prime numbers in an array");
console.log("INPUT ::: " + input4);
console.log("OUTPUT ::: " + output4);
console.log("*****************************************************");

//**************************** e. Return all the palindromes in an array ****************************
let input5 = ["abc", "1212", "madam", "racecar", "cool", "1331", "malayalam"];
let N = input5.length;
let isPalindrome = function (s) {
  let a = s;
  s = s.split("").reverse().join("");
  return s == a;
};
let output5 = ((arr, N) => {
  let ans = [];
  for (let i = 0; i < N; i++) {
    if (isPalindrome(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
})(input5, N);
console.log("TASK: Return all the prime numbers in an array");
console.log("INPUT ::: " + input5);
console.log("OUTPUT ::: " + output5);
console.log("*****************************************************");

//**************************** f. Return median of two sorted arrays of the same size. ****************************
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
let output6;
if (n1 == n2) {
  output6 = ((ar1, ar2, n) => {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1,
      m2 = -1;
    for (count = 0; count <= n; count++) {
      if (i == n) {
        m1 = m2;
        m2 = ar2[0];
        break;
      } else if (j == n) {
        m1 = m2;
        m2 = ar1[0];
        break;
      }
      if (ar1[i] <= ar2[j]) {
        m1 = m2;
        m2 = ar1[i];
        i++;
      } else {
        m1 = m2;
        m2 = ar2[j];
        j++;
      }
    }
    return (m1 + m2) / 2;
  })(ar1, ar2, n1);
} else {
  output6 = "Doesn't work for arrays of unequal size";
}
console.log("TASK: Return median of two sorted arrays of the same size");
console.log("INPUT ::: " + ar1 + "\n" + ar2);
console.log("OUTPUT ::: " + output6);
console.log("*****************************************************");

//**************************** g. Remove duplicates from an array ****************************
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var n = arr.length;
let output7 = ((arr, n) => {
  if (n == 0 || n == 1) return n;
  var temp = new Array();
  var j = 0;
  for (var i = 0; i < n - 1; i++) if (arr[i] != arr[i + 1]) temp[j++] = arr[i];
  temp[j++] = arr[n - 1];
  return temp;
})(arr, n);
console.log("TASK: Remove duplicates from an array");
console.log("INPUT ::: " + arr);
console.log("OUTPUT ::: " + output7);
console.log("*****************************************************");

//**************************** h. Rotate an array by k times ****************************
let arr_rotate = [1, 2, 3, 4, 5];
let arr_size = arr_rotate.length;
let K = 2;
let output8 = ((a, n, k) => {
  let finalarr = [];
  k = k % n;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      finalarr.push(a[n + i - k]);
    } else {
      finalarr.push(a[i - k]);
    }
  }
  return finalarr;
})(arr_rotate, arr_size, K);
console.log("TASK: Rotate an array by k times");
console.log("INPUT ::: " + arr_rotate);
console.log("OUTPUT ::: " + output8);
console.log("*****************************************************");
