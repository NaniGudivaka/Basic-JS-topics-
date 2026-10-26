const array1 = [1, 2, 3, 4];
const array2 = array1.slice();
array2.push(5);
console.log(array1);
console.log(array2);

const [firstValue, secondValue] = [1, 2, 3, 4];

console.log(firstValue);
console.log (secondValue);

for(let i = 1 ; i <= 10; i++){

  if(i % 3 === 0){
    continue;

  }
  console.log(i);
  if(i === 8){
    break;

  }

}

let i = 1;
while(i <= 10){
  
  console.log(i);
  i++;
}

function names(...args) {
  let result = ['siva', 'nani', ];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === 'Search') {
      result.push('Searched');  // store index
    }else{
      result.push(result);
    }
  }

  return result;
}

let final = names('siva', 'nani', 'Search');

console.log(final);  // [2]


function checkBankBalance(existingAmount){

  let balance = existingAmount;
  function deposit(amount){
    balance = balance + amount;
    return 'Total amount :' + balance;
  }

  function withdrawAmount(amount){
    if (balance < amount){
      return 'Insufficient Funds..! '
    }else{
      balance = balance - amount ;
      return 'Total amount : ' + balance;
    }

  }
  return{

    deposit : deposit,
    withdrawAmount : withdrawAmount

  };

}
let user = checkBankBalance(1000);
console.log(user.deposit(500));
console.log(user.withdrawAmount(1500));



let obj = {num : 1, num2 : 3};
let obj1 = obj;
console.log(obj1.num);
