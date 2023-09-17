# Рефакторинг кода 
___________________________________________________
## Лабораторная работа 7

В данной лабораторной работе рефакторить код написанный на javascript

### Задание 1. level stone

Скрипт сравнивает две переменные и выводит равны они или нет

```js
var a = prompt('var one'); var _ = prompt('var two');
if (a === _) console.log('equally')
else console.log('equally');
var b = 'world'; var a = a + b;
```

### Задание №2. level iron

Скрипт выводит названия фруктов, а затем отображает название фрукта и его цвет

```js
var f = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
console.log(f[3]);
console.log(f[4]);
if (f[0] === 'apple') console.log('apple green')
if (f[0] === 'strawberry') console.log('strawberry red')
if (f[0] === 'blueberry') console.log('blueberry blue')
if (f[0] === 'raspberry') console.log('raspberry light red')
if (f[0] === 'lemon') console.log('lemon yellow')
if (f[1] === 'apple') console.log('apple green')
if (f[1] === 'strawberry') console.log('strawberry red')
if (f[1] === 'blueberry') console.log('blueberry blue')
if (f[1] === 'raspberry') console.log('raspberry light red')
if (f[1] === 'lemon') console.log('lemon yellow')
if (f[2] === 'apple') console.log('apple green')
if (f[2] === 'strawberry')  console.log('strawberry red')
if (f[2] === 'blueberry')  console.log('blueberry blue')
if (f[2] === 'raspberry') console.log('raspberry light red')
if (f[2] === 'lemon') console.log('lemon yellow')
if (f[3] === 'apple') console.log('apple green')
if (f[3] === 'strawberry') console.log('strawberry red')
if (f[3] === 'blueberry') console.log('blueberry blue')
if (f[3] === 'raspberry') console.log('raspberry light red')
if (f[3] === 'lemon') console.log('lemon yellow')
if (f[4] === 'apple') console.log('apple green')
if (f[4] === 'strawberry') console.log('strawberry red')
if (f[4] === 'blueberry') console.log('blueberry blue')
if (f[4] === 'raspberry') console.log('raspberry light red')
if (f[4] === 'lemon') console.log('lemon yellow')
```

### Задание 3. level gold

Скрипт выполняет подсчет затрат на зарплату сотрудникам.  
Где спрашивает у пользователя кол-во сотрудников и зарплату на одного человека

```js
var d=prompt('Введите кол-во человек ', undefined);
if (!isNaN(parseFloat(d))){d=parseFloat(d)
}else{d = 0;}
while(d === 0)
{ var d=prompt('Введите кол-во человек ', undefined);
    if (!isNaN(parseFloat(d))) {
        d = parseFloat(d)        }else{d = 0;    }
}
var k=prompt('Введите зарплату на человека ', undefined);
if (!isNaN(parseFloat(k))){k=parseFloat(k);} else {k=0;}
while(d === 0) {
    var k = prompt('Введите зарплату на человека ', undefined);
    if (!isNaN(parseFloat(k))) {
        k = parseFloat(k)
    } else {
        k = 0;
    }
}
alert('Затраты на ЗП' + d*k);
```

### Задание 4

Необходимо просмотреть свой код из предыдущей лабораторной работе  
и провести работу над ошибками (если, конечно, ошибки есть)