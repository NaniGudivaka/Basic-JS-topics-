function fizzBuzz(num){
  let result = [];

  for(let i = 1; i <= num; i ++){

    if(i % 3 === 0 && i % 5 === 0){
      result.push('fizzbuzz');
    }else if(i % 3 === 0){
      result.push('fizz');

    }else if (i % 5 === 0){
      result.push('buzz');
    }else{
      result.push(i);
    }
  } return result;
}

let output = fizzBuzz(200);
console.log(output);



// function names (name){
//   let name = [];
//   for(let i = 0; i <= name.length; i++){
//     if(name[i] === 'Search'){
//       name.push(i);
//     }else{
//       name.push(names)
//     }
//   }return name;
// }


// let final = names('siva', 'nani', 'Search');

// console.log(final);


function names(items) {

  const result = [];

  for (let i = 0; i < items.length; i++) {

    if (items[i] === 'Search') {
      result.push('Found Search');
    } else {
      result.push(items[i]);
    }

  }

  return result;
}

const final = names('siva', 'nani', 'Search');

console.log(final);

