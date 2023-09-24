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

Скрипт проводит анализ имеющихся студентов в массиве.
Выводит среднюю оценку и список плохих студентов

```js

var klassSoStudentami = [{FIO:'Петров А.А.',Ocenka:5},
    {FIO:'Иванов Б.Б.',Ocenka:3.4},{FIO:'Сидоров Г.Г.',Ocenka:9},
    {FIO:'Немолодой Д.Д',Ocenka:2},{FIO:'Молодой Е.Е',Ocenka:3.4}];

var s = 0;
var kolichectvo = 0;
var ploxieStudenti = [];

for      (var PoryadkoviyNomer=0; PoryadkoviyNomer < klassSoStudentami.length; PoryadkoviyNomer++)
{
    if (klassSoStudentami[PoryadkoviyNomer].Ocenka>5) console.log('Это значение учитываться не будет оно не соответствует допустимым значениям');
    if (klassSoStudentami[PoryadkoviyNomer].Ocenka<0) console.log('Это значение учитываться не будет оно не соответствует допустимым значениям');
    if (!(klassSoStudentami[PoryadkoviyNomer].Ocenka<=5&&klassSoStudentami[PoryadkoviyNomer].Ocenka>=0)) continue;
    if (klassSoStudentami[PoryadkoviyNomer].Ocenka<4) ploxieStudenti.push(klassSoStudentami[PoryadkoviyNomer])
    s = s + klassSoStudentami[PoryadkoviyNomer].Ocenka   ;
    kolichectvo = kolichectvo + 1 ;
}
s = s/kolichectvo;
console.log('Средняя оценка: '+s);
console.log('Плохие студенты:');
if(  ploxieStudenti.length === 0 ) console.log('Таких нет');
ploxieStudenti.forEach((znachenie)=>{console.log('Фио: '+znachenie.FIO+'; Оценка: '+znachenie.Ocenka)});

```

### Задание 5

Необходимо просмотреть свой код из предыдущей лабораторной работе  
и провести работу над ошибками (если, конечно, ошибки есть)