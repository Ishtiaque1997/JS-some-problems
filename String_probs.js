//specific element in a string cannot be changed like array/push/pop cannot be done that means immutable
const myString='ishtiaque'

function reverseString(text){
 let reverse='';
 for(const letter of text){
  reverse=letter+reverse;
 }
 return reverse;
}

const reverse=reverseString(myString);
console.log(reverse);
