const products=[
 {name:'laptop',price:22000},
 {name:'shirt',price:900},
 {name:'watch',price:3600},
 {name:'iphone',price:45000}
]
let totalPrice=0;
for(const product of products){
 totalPrice=totalPrice+product.price;
}
// console.log(totalPrice);

const cart=[
 {name:'laptop',price:22000,quantity:2},
 {name:'shirt',price:900,quantity:3},
 {name:'watch',price:3600,quantity:4},
 {name:'iphone',price:45000,quantity:1}
]
let cartTotal=0;
for(const product of cart){
 const productTotal=product.price*product.quantity;
 cartTotal=cartTotal+productTotal;
}
console.log(cartTotal)