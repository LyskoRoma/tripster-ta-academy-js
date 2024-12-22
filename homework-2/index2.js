// Объекты: основы / Объекты / task 1 - Привет, object
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// Объекты: основы / Объекты / task 2 - Проверка на пустоту
let obj = {};
const isEmpty = (obj) => {
    if (Object.keys(obj).length === 0) {
        return true
    }
    return false;
}
console.log(isEmpty(obj));

// Объекты: основы / Объекты / task 3 - Объекты-константы?
const user = {
    name: "John"
};
       // это будет работать? Да, const защищает от изменений только саму переменную user, а не её содержимое
       user.name = "Pete";

// Объекты: основы / Объекты / task 4 - Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const totalSalaries = () => {
    let sum = 0;
        for (let key in salaries) {
            sum += salaries[key]
        }
        return sum
}
console.log(totalSalaries())

// // Объекты: основы / Объекты / task 5 - Умножаем все числовые свойства на 2
let obj = {
    first: 100,
    second: 120,
    name: "Albert"
}
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}
multiplyNumeric(obj);
console.log(obj);