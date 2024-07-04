// alert("robin");
/*****
 * javaScript variable name are case-sensitive
 * Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, javaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g `sellingPrice` and `firstName` rather then `x` and `y`)
 * You can not add number frist
 * _, $ is acceptable but - not accaptable
 *
 */

/*****
 * var variable
 * You can re declere
 * you can re assaign
 * Global Scooped
 * var is hosted
 */

var a = 10;
var a = 20;
a = "Bangladesh";
{
  var block = "30";
  console.log(a);
}
console.log(block);
console.log(a);

let firstName;
let FristName;

var country = "Bangladesh";
console.log(country);

// var countrys;
// console.log(countrys);
// country = "Bangladesh";

let fruits = "orange";
console.log(`${fruits} is my fev, ${fruits} i like eat`);

/*****
 * let variable
 ! You can not re declere
 * you can re assaign
 * Block Scooped
 * let is not hosted
 */
// {
//   let b = 10;
//   b = 11;
// }
let b = 10;
b = 11;
{
  console.log(b);
}

// let b = 10;
// b = 11;
// console.log(b);

// console.log(people);
// let people = "SomeOne";

/*****
 * const variable
 ! You can not re declere
 * you can not re assaign
 * Block Scooped
 * const is not hosted
 */

// const c = 10;
// const c = 11;
// console.log(c);

// const c = 10;
// c = 11;
// console.log(c);

const c = 10;
{
  const d = 50;
  console.log(c);
  console.log(d);
}

const person = {
  fristName: "Robin",
  age: 24,
};
person.country = "Bangladesh";

person.age = 25;
console.log(person);

let fristName1 = "Robin";
