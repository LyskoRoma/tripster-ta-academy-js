// Класс / Класс: базовый синтаксис / Task 1 - Перепишите класс
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();


// Класс / Наследование классов / Task 1 - Ошибка создания экземпляра класса
class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // ошибки нет


// Класс / Статические свойства и методы / Task 1 - Класс расширяет объект?
class Rabbit extends Object {
    constructor(name) {
        super(); // Обязательный вызов конструктора родительского класса Object
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

