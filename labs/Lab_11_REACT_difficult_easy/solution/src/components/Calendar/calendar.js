const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const month = new Date().getMonth();

function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

function getDaysInMonth(date) {
    const year = date.getFullYear();

    if (isLeapYear(year) && month === 1) {
        return DAYS_IN_MONTH[month] + 1;
    }
    else {
        return DAYS_IN_MONTH[month];
    }
}

function getDayOnWeek(date) {
    const dayOfWeek = date.getDay();

    if (dayOfWeek == 0) return 6;

    return dayOfWeek - 1;
}

export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOnWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                if (i === 0 && j < monthStartsOn) {
                    result[i][j] = DAYS_IN_MONTH[month] - (monthStartsOn - (j + 1));
                }
                else {
                    result[i][j] = day - DAYS_IN_MONTH[month];
                    day++;
                }
            }
            else {
                result[i][j] = new Date(year, month, day++);
            }
            
        }
        
    }
    return result;

}