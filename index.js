function countCharacters(nmbr) {
  return nmbr.length;
}
console.log(countCharacters("Yahia"));

let original = "Hello World";
let reversed = original.split("").reverse().join("");

console.log(reversed);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let example1 = "yahia";
console.log(capitalizeFirstLetter(example1));

let numbers = [
  1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018,
  2022, 2024,
];
let high = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > high) {
    high = numbers[i];
  }
}
let low = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < low) {
    low = numbers[i];
  }
}
console.log(high);
console.log(low);

let arr = [4, 20, 30, 43, 112];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Sum is " + sum);

let numArray = [1, 2, 3, 4, 5];
let filteredArray = numArray.filter((num) => num !== 3);
console.log(filteredArray);

let n = 5;

function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

console.log(factorial(n));

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(8);
checkPrime(17);

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(20): " + fibonacci(20));
console.log("Fibonacci(3): " + fibonacci(3));