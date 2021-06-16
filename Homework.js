import "./styles.css";
/*
Практическое задание
1. Написать функцию, преобразующую число в объект. Передавая на вход
  число от 0 до 999, надо получить на выходе объект, в котором в
  соответствующих свойствах описаны единицы, десятки и сотни.
  Например, для числа 245 надо получить следующий объект:
  {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
  необходимо выдать соответствующее сообщение с помощью console.log и
//   вернуть пустой объект.
// */
// // let n = prompt("Введите число от 0 до 999");
// console.log(numToObj(45));
// function numToObj(n) {
//   if (n < 0 || n > 999 || typeof n !== "number") {
//     console.log("Неверное число. Введите число от 0 до 999.");
//   } else {
//     let str = n.toString();
//     let obj = {};
//     let l = str.length;
//     switch (l) {
//       case 3:
//         obj["Сотни"] = str[l - 3];
//       case 2:
//         obj["Десятки"] = str[l - 2];
//       case 1:
//         obj["Единицы"] = str[l - 1];
//     }
//     return obj;
//   }
// }

    //  //Функция добавления товара в корзину
    //  function addProductBasket(arr, name, price, quantity) {
    //     arr.push({
    //         product: name,
    //         price: price,
    //         quantity: quantity,
    //         total: totalSum
    //     });
    // }

    // function totalSum() {
    //     return this.price*this.quantity;
    // }

    // var basket = [
    //     {product: 'shirt',
    //     price: 200,
    //     quantity: 2,
    //     total: totalSum},
    //     {product: 'shorts',
    //     price: 700,
    //     quantity: 1,
    //     total: totalSum},
    //     {product: 'dress',
    //     price: 1100,
    //     quantity: 3,
    //     total: totalSum},
    //     {product: 'socks',
    //     price: 150,
    //     quantity: 5,
    //     total: totalSum},
    // ]

    // function countBasketPrice(arr) {
    //     var sum = 0;
    //     for (var i = 0; i < arr.length; i++) {
    //         sum += arr[i].total();
    //     }
    //     return sum;
    // }

    // function descBasketPrice(arr) {
    //     var str = '';
    //     for (var i = 0; i < arr.length; i++) {
    //         str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    //     }
    //     return str;
    // }

    // alert('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));