const nums = [2, 45, 12, 90, 33];

const big = Math.max(...nums);
const small = Math.min(...nums);
console.log(big);
console.log(small);

const nums1 = [1, 2, 3, 4];
const double = nums1.map((num) =>{
  return num * 2;
});
console.log(double);
const nums2 = [1,2,3,4,5,6];

const even = nums2.filter((item) =>{
  return item % 2 == 0;
});
console.log(even);

const nums3 = [10, 20, 70, 80];
const find = nums3.find((item) =>{
  return item > 50;
});
console.log(find);

const names = ["nani", "ram", "sam"];

console.log(names.toUpperCase());