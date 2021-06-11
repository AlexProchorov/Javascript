// // Homework
// // Task_1
// let nums = 0;
// while (nums <= 100) {
//     let check = true;
//     for (let i = 2; i < nums; i++) {
//         if (nums % i === 0) {
//             check = false;
//             break;
//         }
//     }
//     if (check) console.log(nums);
//     nums++;
// }



// Task_2
// let basket = [
//     {
//         product: "pen",
//         price: getNumber(50, 100)
//     },
//     {
//         product: "pencil",
//         price: getNumber(50, 100)
//     },
//     {
//         product: "file",
//         price: getNumber(50, 100)
//     },
//     {
//         product: "paper",
//         price: getNumber(50, 100)
//     }
// ];
// let basketPrice = 0;
// for (let prod of basket) {
//     basketPrice += prod.price;
//     alert("Товар " + prod.product + " стоит: " + prod.price);
// }

// Task_3
// function countBasketPrice(basket) {
//     let funBasketPrice = 0;
//     for (let prod of basket) {
//         funBasketPrice += prod.price;
//     }
//     return funBasketPrice;
// }
