//Features of ES6
//*******************1. Object Property Shorthand ***************
const name = 'Rythem';
const age = 25;
const branch = 'CS';

//without ES6
//const student ={
//    name: name,
//    age: age,
//    course: branch
//}

const student = {
  name,
  age,
  course: branch,
};
console.log(student);
console.log('\n**********');

//*******************2. Object Destructuring *******************
// all commented out code contains different scenarios
const product = {
  prodName: 'amul',
  prodPrice: 34,
  stock: 100,
};
//without ES6
//const prodName = product.name;
//const prodPrice = product.price;

//2.a)
//const {prodName,prodPrice} = product;
//console.log(prodName);
//console.log(prodPrice);

//2.b)we can give diff names
// const {prodName:productName, prodPrice} = product;
// console.log(productName);
// console.log(prodPrice);

//2.we can give default value while deconstructing
const { prodName, prodPrice, retailPrice = 150 } = product;
console.log(prodName);
console.log(prodPrice);
console.log(retailPrice);

const product2 = {
  prodName: 'amul',
  prodPrice: 34,
  stock: 100,
  retailPrice2: 100,
};
const { retailPrice2 = 150 } = product2;
console.log('\n\n' + retailPrice2);
