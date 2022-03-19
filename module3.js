// let message = '';
// const user = {
//     age: 20,
//     hobby: 'html',
//     name: 'Mango',
//     premium: true,
// };
// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// console.log(keys);
// for (key of keys) {
//     message += `${key}: ${user[key]}\n`;
//     console.log(message);
// }
// // console.log(message);
// console.log(message);
// const findBestEmployee = function(employees) {
//     'use strict'
//     // Write code under this line
//     const employeeName = Object.keys(employees)
//     let bestEmployee = ''
//     let maxTasks = 0
//     for (const employee of employeeName) {
//         if (employees[employee] > maxTasks) {
//             maxTasks = employees[employee]
//             bestEmployee = employee
//         }
//     }

//     return { name: bestEmployee }
// }

// // Объекты и ожидаемый результат
// const developers = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
// }
// console.log(findBestEmployee(developers))
//     // 'lorence'

// const supports = {
//     poly: 12,
//     mango: 17,
//     ajax: 4,
// }
// console.log(findBestEmployee(supports))
//     // 'mango'

// const sellers = {
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
// }
// console.log(findBestEmployee(sellers))
//     // 'lux'
// function getAllPropValues(array, prop) {
//     'use strict'
//     // Write code under this line
//     let arrValue = []
//     for (const item of array) {
//         if (prop in item) {
//             arrValue.push(item[prop])
//         }
//     }
//     return arrValue
// }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ]

// console.log(getAllPropValues(products, 'name'))
//     // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity'))
//     // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'))
//     //  []
// function calculateTotalPrice(array, prop) {
//     'use strict'
//     // Write code under this line
//     let totalPrice = 0
//     for (const stuff of products) {
//         if (stuff.name === prop) {
//             totalPrice += stuff.price * stuff.quantity
//         }
//     }
//     return totalPrice
// }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ]

// console.log(calculateTotalPrice(products, 'Радар'))
//     // 9080

// console.log(calculateTotalPrice(products, 'Сканер'))
//     // 10200
// console.log(calculateTotalPrice(products, 'Захват'))
//     // 2400

// console.log(calculateTotalPrice(products, 'Дроид'))
//     // 2800
const printMessage = function(message) {
  console.log(message);
};

const higherOrderFunction = function(callback) {
  const string = 'HOCs are awesome';
  callback(string);
};

higherOrderFunction(printMessage);
