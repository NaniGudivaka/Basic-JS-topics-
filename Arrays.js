const values= [1, 'a', 2, 'b', 'c', 'd'];

const letters = values.filter((value) =>{

 return typeof value === 'string';
 });

 const nums = values.filter((value) =>{
  return typeof value === 'number';
 

});
console.log(letters, nums);


const digits = [2, 4, 54, 6, 64, 356, 24,3 ];

digits.sort((a, b) =>{
  return b - a;
});
console.log(digits);

digits.map((digi) => digi * 2);
console.log(digits);