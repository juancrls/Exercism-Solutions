const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekStart = {first: 1, second: 8, teenth: 13, third: 15, fourth: 22, last: 28};

export const meetup = (year, month, desc, weekday) =>  {
    month--;
    let date, day = weekStart[desc];
    if(day == undefined){
        throw new Error
    }
    
    for (let d = 0; d < 7; d++) {
        date = new Date(year, month, day + d)
        if (DAYS[date.getDay()] === weekday) {
            date.getMonth() !== month ? date = new Date(year, month, day + d - 7) : null
            break;
        }
    }
    return date;
}