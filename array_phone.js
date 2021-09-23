const phones=[
   {name:'nokia',price:500,camera:10,storage:32},
   {name:'walton',price:60,camera:12,storage:22},
   {name:'xiaomi',price:30,camera:30,storage:64},
   {name:'apple',price:100,camera:50,storage:232},
];
let cheapest=phones[0];
for (const phone of phones){
 if(
  phone.price<cheapest.price){
    cheapest=phone;
 }
}

console.log(cheapest)