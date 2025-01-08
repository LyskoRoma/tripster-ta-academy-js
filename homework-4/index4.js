// Продвинутая работа с функциями / Рекурсия и стек / Task1 - Вычислить сумму чисел до данного
const sumTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(100));

const sumTo = (n) => {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n-1)
    }
}

const sumTo = (n) => {
    return n * (n + 1) / 2;
}


// Продвинутая работа с функциями / Рекурсия и стек / Task2 - Вычислить факториал
function factorial(n) {
    if (n == 1) return 1;
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));


// Продвинутая работа с функциями / Область видимости переменных, замыкание / Task1 - Учитывает ли функция последние изменения?
let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано - "Pete"

// Продвинутая работа с функциями / Область видимости переменных, замыкание / Task3 - Независимы ли счётчики?
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1