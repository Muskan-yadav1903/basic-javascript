let str1 = "Hello";
let str2 = "World";
let result1 = str1 + str2;
console.log(result1);




let result2 = 3 + 2 + "7";
console.log(result2);
// 3 + 2 is evaluated first, and since both are numbers, it results in 5.
// Then, 5 + "7" is calculated. Since one of the operands is a string ("7"), JavaScript converts the number 5 to a string and concatenates it with "7", resulting in "57".



const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);
// Explanation: When you assign to arr[10] you create empty slots from index 3 to 9, making the new length one more than the highest index: 10 + 1 = 11.





