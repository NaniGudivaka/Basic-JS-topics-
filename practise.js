// console.log('Nani' - 100);
// console.log('Nani' + 100);

// const arr = [1, 2, 3, 4];
// const arr1 = [...arr];
// console.log(arr1);

let arr = ['b', 8, 9, 'c', 2, 'Nani'];
function separteArraysAndStrings(arr){
  const strings = arr.filter((item)=> typeof item === 'string');
  const numbers = arr.filter((item) => typeof item === 'number');

  return {strings, numbers};
}
const result = separteArraysAndStrings(arr);
console.log(result.strings);
console.log(result.numbers);