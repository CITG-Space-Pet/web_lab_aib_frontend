# Подсказочки для лабораторной

-----

## Объявление переменных

Объявить переменные можно при помощи операторов:

1. При помощи `var`. Является устаревшим методом, но можно встретить в legacy коде

```js
var someVariable
```

3. При помощи `let`

```js
let someVariable
```

4. При помощи `const`. Отличие в от двух ддругих в том что нельзя менять значение переменной

```js
const someVariable = 10
```

## Циклы и условия

Если Вы знакомы с C++, то Вам будет знаком синтаксис JS.  
Для того чтобы объявить цикл можно использовать операторы `for`, `while` и `do...while`.  
Также доступны операторы `continue` и `break`.  
Для того чтобы проверить какое то логическое условие можно использовать оператор `if`.  
Также есть оператор `switch...case`, который позволяет сравнить некоторое выражение с набором значений
В JS есть тернарный оператор синтаксис у него следующий `const value = a > b ? 'a больше b' : 'a не больше b'`

### Применение на практике

в данном примере будем использовать функцию `randomInteger` которую напишем позже

```js
let loseStreak = randomInteger(0, 5);

switch (loseStreak) {
    case 0:
        console.log('You lucky');
        break;
    case 1:
        console.log('Not bad');
        break;
    case 2:
        console.log('Im fine');
        break;
    default:
        console.log('No comments...');
}

let mmr = 0;

while (true) {
    mmr += randomInteger(0, 100) <= 50 ? -20 : 20;
    if (mmr > 1000) {
        console.log('knight');
        break;
    }
}

const cmkoQuestions = 40;
let myBall = 0;

for (let i = 0; i < cmkoQuestions; i++) {
    const intuition = randomInteger(0, 3);
    const rightAnswer = randomInteger(0, 3);

    myBall += intuition === rightAnswer;
}

if (myBall > 10) {
    console.log('Good job')
} else {
    console.log('hahahaha')
}
```

## Функции

Для написания функций нужно воспользоваться оператором `function`.

```js
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
```

В JS есть анонимные функции и синтаксис у них следующий:

```js
() => {
    // some code
}
```

Давайте преобразуем функцию `randomInteger` в анонимную функцию

```js
const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
```

Вызов такой функции происходит так же как и с обычной функцией: `randomInteger(10, 100)`

## Объекты

Для создания пустого объекта можно использовать оператор `new Object()` или `{}`  
Для добавления свойств объекту необходимо использовать синтаксис `{ key: value }`  
Также можно добавить методы, но если использовать в качестве значения анонимную  
функцию, то потеряется контекст и не будет возможности обратиться к оператору `this`

```js
let exampleObject = {
    money: 1000,
    percent: 1.4,
    salary: function () {
        return this.money * this.percent;
    }
}
console.log(exampleObject.salary());
```