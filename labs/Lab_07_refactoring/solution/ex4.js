let Students = [
    { FIO: 'Петров А.А.', Mark: 5 },
    { FIO: 'Иванов Б.Б.', Mark: 3.4 },
    { FIO: 'Сидоров Г.Г.', Mark: 9 },
    { FIO: 'Немолодой Д.Д', Mark: 2 },
    { FIO: 'Молодой Е.Е', Mark: 3.4 }
];

let TotalScore = 0;
let NumberOfStudents = 0;
let BadStudents = [];

for (let i = 0; i < Students.length; i++) {
    let CurrentScore = Students[i].Mark;

    if (CurrentScore < 0 || CurrentScore > 5) {
        console.log('Оценка ' + CurrentScore + ' не учитывается, так как не соответствует допустимым значениям');
        continue;
    }

    if (CurrentScore < 4) {
        BadStudents.push(Students[i]);
    }

    TotalScore += CurrentScore;
    NumberOfStudents++;
}

let AverageScore = TotalScore / NumberOfStudents;
console.log('Средняя оценка: ' + AverageScore);

console.log('Плохие студенты:');
if (BadStudents.length === 0) {
    console.log('Таких нет');
} else {
    BadStudents.forEach(student => {
        console.log('ФИО: ' + student.FIO + '; Оценка: ' + student.Ocenka);
    });
}