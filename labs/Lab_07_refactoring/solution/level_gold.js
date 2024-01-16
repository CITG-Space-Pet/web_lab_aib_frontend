let NumberOfWorkers = prompt ('Введите кол-во человек ', 0);
NumberOfWorkers = parseFloat(NumberOfWorkers);

while (NumberOfWorkers <= 0 || isNaN(NumberOfWorkers)) 
{
    NumberOfWorkers = prompt('Введите корректное кол-во человек ', 0);
    NumberOfWorkers = parseFloat(NumberOfWorkers);
}

let SalaryPerWorker = prompt ('Введите зарплату на человека ', 0);
SalaryPerWorker = parseFloat(SalaryPerWorker);

while (SalaryPerWorker <= 0 || isNaN(SalaryPerWorker)) 
{
    SalaryPerWorker = prompt('Введите корректную зарплату на человека ', 0);
    SalaryPerWorker = parseFloat(SalaryPerWorker);
}

alert('Затраты на ЗП: ' + NumberOfWorkers * SalaryPerWorker);    