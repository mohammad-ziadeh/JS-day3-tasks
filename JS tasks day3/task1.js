console.log("one");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("two");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("three");
{
  let numbers = [1, 2, 3, 4, 5];
  for (x of numbers) {
    console.log(x);
  }
}
console.log("four");
{
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (x of numbers) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
}
console.log("five");
{
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
}
console.log("six");
{
  let numbers = [1, 2, 3, 4, 5];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
}
console.log("seven");
{
  let numbers = [5, 4, 3, 2, 1];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(min);
}
console.log("eleven");
{
  let numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum / numbers.length);
}
console.log("twelve");
{
  let numbers = [1, 2, 3, 4, 5];
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  console.log(product);
}
console.log("thirteen");
{
  let prime = 20;
  for (let i = 0; i < prime; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i !== 1) {
      console.log(i);
    } else if (i == 2 || i == 3 || i == 5 || i == 7) {
      console.log(i);
    }
  }
}
console.log("fourteen");
{
  let num = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(num + "*" + i + "=" + num * i);
  }
}
console.log("fifteen");
{
  let arr = [1, 2, 3, 4, 5];
  let input = 2;
  for (x of arr) {
    if (x % input !== 0) {
      console.log(x);
    }
  }
}
console.log("sixteen");
{
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();
  for (x of arr) {
    console.log(x);
  }
}
console.log("seventeen");
{
  let arr = [1, 2, 3, 4, 5];
  let start = 2;
  let end = 4;
  for (let i = start; i <= end; i++) {
    console.log(arr[i]);
  }
}

console.log("eighteen");
{
  let arr = [1, 2, 3, 4, 5];
  let input = 4;
  for (x of arr) {
    if (x == input) {
      console.log(true);
    }
  }
}

console.log("nineteen");
{
  let arr = [1, 2, 1, 3, 2, 1];
  let input = 1;
  for (x of arr) {
    if (x == input) {
      console.log(input);
    }
  }
}

console.log("twenty");
{
  let input = 10;
  let num1 = 0,
    num2 = 1;
  console.log(num1);
  console.log(num2);
  let sum = num1 + num2;
  while (sum <= input) {
    console.log(sum);
    num1 = num2;
    num2 = sum;
    sum = num1 + num2;
  }
}
