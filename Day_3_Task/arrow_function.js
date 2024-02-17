//**************************** a. Print odd numbers in an array ***************************
let oddFun = (num) => {
  let oddArray = [];
  for (let index = 0; index < num; index++) {
    if (index % 2 !== 0) {
      oddArray.push(index);
    }
  }
  return oddArray;
};
const input1 = 20;
let output1 = oddFun(input1);
console.log("TASK: Print odd numbers in an array");
console.log("INPUT ::: " + input1);
console.log("OUTPUT ::: " + output1);
console.log("*****************************************************");

//**************************** b. Convert all the strings to title caps in a string array ****************************
let titleCase = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
const input2 = "convert all the strings to title caps in a string array";
let output2 = titleCase(input2);
console.log("TASK: Convert all the strings to title caps in a string array");
console.log("INPUT ::: " + input2);
console.log("OUTPUT ::: " + output2);
console.log("*****************************************************");

//**************************** c. Sum of all numbers in an array ****************************
let sumFun = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
};
const input3 = [1, 2, 3, 4, 5];
let output3 = sumFun(input3);
console.log("TASK: Sum of all numbers in an array");
console.log("INPUT ::: " + input3);
console.log("OUTPUT ::: " + output3);
console.log("*****************************************************");

//**************************** d. Return all the prime numbers in an array ****************************
let primeFun = (num) => {
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
};
const input4 = 20;
let output4 = primeFun(input4);
console.log("TASK: Return all the prime numbers in an array");
console.log("INPUT ::: " + input4);
console.log("OUTPUT ::: " + output4);
console.log("*****************************************************");

//**************************** e. Return all the palindromes in an array ****************************
let isPalindrome = (s) => {
  let a = s;
  s = s.split("").reverse().join("");
  return s == a;
};
let palindromFun = (arr, N) => {
  let ans = [];
  for (let i = 0; i < N; i++) {
    if (isPalindrome(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
};
let input5 = ["abc", "1212", "madam", "racecar", "cool", "1331", "malayalam"];
let N = input5.length;
let output5 = palindromFun(input5, N);
console.log("TASK: Return all the prime numbers in an array");
console.log("INPUT ::: " + input5);
console.log("OUTPUT ::: " + output5);
console.log("*****************************************************");
