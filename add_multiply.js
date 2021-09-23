function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
  const perChairWood=5;
  const perBedWood=10;
  const perTableWood=15;
  const chairWoodQuantity=chairQuantity*perChairWood;
  const tableWoodQuantity=tableQuantity*perTableWood;
  const bedWoodQuantity=bedQuantity*perBedWood;
  const totalWood=chairWoodQuantity+tableWoodQuantity+bedWoodQuantity;
  return totalWood;
}
const first=woodCalculator(1,2,2);
console.log(first);
const names=['abl'];
console.log(names[0].length)