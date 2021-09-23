// const names=['abul','babul','sabul','jabul','kamaal','babul','sabul','kabul','abul'];
// function removeDuplicate(names){
//    const unique=[];
//    // for(let i=0;i<names.length;i++){
//    //  const elements=names[i];
//    //  // console.log(elements)
//    // }
//    for(const element of names){
//     if(unique.indexOf(element)==-1){
//      unique.push(element);
//     }
//    }
//    return unique;
// }
// const uniqueNames=removeDuplicate(names);
// console.log(uniqueNames)

const numbers=[11,22,44,55,66,777,22,44,55,66];
const newList=[];
function removeProxy(numbers){
 // const newList=[];
 for(const fact of numbers){
  if(newList.indexOf(fact)==-1){
   newList.push(fact);
  }
 }
 return newList;
}
const newFacts=removeProxy(numbers);
console.log(newFacts)