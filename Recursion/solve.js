// function logNumbers(number){
//   if(number<=0) return 0 // base condition
//   console.log(number); 
//     logNumbers(number-1);  // hypothesis
//     // console.log(number);    // induction
// }
// logNumbers(10)

// let arr=[5,1,4,7,10,2]
// function sortArray(arr,length){
// dk
// }

// sortArray(arr,arr.length)

function factorialNumber(number){
   if(number==0) return 1
   return number* factorialNumber(number-1)
}

console.log(factorialNumber(5))