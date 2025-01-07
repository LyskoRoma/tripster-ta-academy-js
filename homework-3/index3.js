// Типы данных / числа / Task 2 Почему 6.35.toFixed(1) == 6.3? || Как правильно округлить 6.35?
let x = 6.35;
console.log(Math.round(x * 10) / 10)


// Типы данных / числа / Task 5 Случайное число от min до max
const randomFun = (min, max) => {
    return Math.random() * (max - min) + min;
}
console.log(randomFun(5, 12));


// Типы данных / числа / Task 6 - Случайное целое число от min до max
const  randomInteger = (min, max) => {
    let randNumb = min + Math.random() * (max - min);
    return Math.floor(randNumb);
}
console.log(randomInteger(1, 5));

// Типы данных / строки / Task 1 - Сделать первый символ заглавным
const ucFirest = (str) => {
    return str = `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(ucFirest('ataman'));


// Типы данных / строки / Task 2 - Проверка на спам
const checkSpam = (str) => {
    let resultStr = str.toLowerCase();
    return resultStr.includes("viagra") || resultStr.includes("xxx");
}
// Типы данных / строки / Task 3 - усечение строки
const truncate = (str, maxlength) => {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + '…';
        return str;
    } else {
        return str;
    }
}
console.log(truncate(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)));
// Типы данных / строки / Task 4 - Выделить число
function extractCurrencyValue(str) {
    return +str.slice(1)
}
console.log(extractCurrencyValue("$1222"))


// Типы данных / Массивы / Task 2 - Операции с массивами
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги')
console.log(styles);


// Типы данных / Массивы / Task 5 - Подмассив наибольшей суммы
let arr = [1, 2, -3, 4, -9, 6];

function getMaxSubSum(arr){
    sum = 0;
    totalSum = 0;
    for (let item of arr){
        sum += item;
        totalSum = Math.max(totalSum, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return totalSum;
}
console.log(getMaxSubSum(arr));

// Типы данных / Методы массивов / Task 1 - Переведите текст вида border-left-width в borderLeftWidth
let str = 'my-short-string';
const camelize = (str) => {
    return str.split('-').map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}
console.log(camelize(str));


// Типы данных / Методы массивов / Task 2 - Фильтрация по диапазону
let arr = [1, 3, 7, 8, 9, 10];
let a = 2, b = 8;
const filterRange = (arr, a, b) => {
    return arr.filter((item) => (item >= a && item <= b) ? true : false);

}
console.log(filterRange(arr, a, b));

// Типы данных / Методы массивов / Task 4 - сортировка в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);

// Типы данных / Методы массивов / Task 7 - Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let resultNames = user.map((item) => item.name);

console.log(resultNames);


// Типы данных / Методы массивов / Task 8 - Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];



let usersMapped = users.map(items =>
    ({fullName: `${items.name} ${items.surname}`,
            id: items.id,
        }
    ))
console.log(usersMapped);


// Типы данных / Object.keys, values, entries / Task 1 - Сумма свойств объекта
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
const sumSalaries = (salaries) =>{
    let totalSum = 0;
    let preResult = Object.values(salaries);
    for (item of preResult){
        totalSum += item;
    }
    return totalSum;
}
console.log(sumSalaries(salaries));


// Типы данных / Object.keys, values, entries / Task 2 - Подсчёт количества свойств объекта
let user = {
    name: 'John',
    age: 30,
    gender: 'male',
};
const countObj = (user) => Object.values(user).length;
console.log(countObj(user));


// Типы данных / Деструктурирующее присваивание / Task 1 - Деструктурирующее присваивание
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;


// Типы данных / Деструктурирующее присваивание / Task 2 - Максимальная зарплата
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries) => {
    let maxSalary = 0;
    let maxPaidEmployee = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxPaidEmployee = name;
        }
    }

    return maxPaidEmployee;

}
console.log(topSalary(salaries));


// Типы данных / Дата и время / Task 1 - Создайте дату
let createDate = new Date(2012, 1, 20, 3, 12);


// Типы данных / Дата и время / Task 2 - Создайте дату
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}


// Типы данных / Формат JSON, метод toJSON / Task 1 - Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
    name: "Василий Иванович",
    age: 35
};
let result = JSON.parse(JSON.stringify(user));