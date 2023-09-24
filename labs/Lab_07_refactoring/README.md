## Инструкция по рефакторингу кода

Рефакторинг кода – это ни в коем случае не его глубокая оптимизация, как считают многие.  
Этот процесс можно сравнить с «причесыванием», наведением лоска. То есть без него программа будет работать,  
но сам код может быть малопонятен, следовательно, его будет сложно оптимизировать при необходимости.  
Для того чтобы справиться с лабораторной работой, необходимо ознакомиться  
с основными правилами написания кода на JS (__[Code Style](https://learn.javascript.ru/coding-style)__)

Также можно ознакомиться с тем как **НЕ НУЖНО** писать код __[Bad practice](https://learn.javascript.ru/ninja-code)__ 

### Примеры рефакторинга кода с моментами неправильного написания

```js
// Код незаменимого кодера
var a = 7
var b = 24
console.log('Кол-во часов в неделе: ' + a*b)

// Код заботливого разработчика
const daysInWeek = 7;
const hoursInDay = 24;
console.log(`Кол-во часов в неделе: ${daysInWeek * hoursInDay}`);

// Код настоящего фокусника
var user = 'guest';

function isAdmin()
{
    if (user === 'Admin')
    {
        return true;
    }
    else
    {
        user = 'Admin';
        return false; 
    }
}

console.log(isAdmin());
console.log(user);
console.log(isAdmin());

// Код разработчика без приколов
var user = 'guest';

function isAdmin()
{
    // тут может быть сложнее логика
    return user === 'Admin';
}

console.log(isAdmin());
console.log(user);
console.log(isAdmin());
```