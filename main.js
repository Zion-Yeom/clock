const thisDate = new Date();
let date = new Date();



const renderCalendar = () => {

    // console.log(date);

// 날짜 가져오기

    const currentYear = date.getFullYear(); // 연
    const currentMonth = date.getMonth();   // 월 ( 0 ~ 11)  1월이면 0
    // / 2월이면 1

    document.querySelector('.yearMonth').innerText =
        `${currentYear}년 ${currentMonth + 1}월`; // 연 월

    // 저번달의 마지막 날짜와 요일 구하기

    const lastMonth = new Date(currentYear, currentMonth, 0);
    const lastMonthLastDate = lastMonth.getDate();
    const lastMonthLastDay = lastMonth.getDay();

    // 이번달의 마지막 날짜와 요일 구하기

    const nowMonth = new Date(currentYear, currentMonth + 1, 0);
    const nextMonthLastDate = nowMonth.getDate();
    const nextMonthLastDay = nowMonth.getDay();

    // console.log(lastMonthLastDate, lastMonthLastDay, nextMonthLastDate, nextMonthLastDay);


    // 날짜 넣기


    // html 요소 생성
    const calendar = document.querySelector(".days");
    calendar.innerHTML = '';

    // 지난달 날짜 넣기
    for (let i = lastMonthLastDate - lastMonthLastDay; i <= lastMonthLastDate; i++) {
        // 지난달 끝나는 날짜가 31일이고 월요일임,
        // 31 - 1 = 30 부터 31까지 2번 반복.
        calendar.innerHTML += `<div class="days_hidden calendar">` + i + `</div>`;
    }


    // 이번달 날짜 넣기
    for (let i = 1; i <= nextMonthLastDate; i++) {
        // 오늘 날짜에 색깔넣기
        if (i === thisDate.getDate() &&
            date.getMonth() === thisDate.getMonth() &&
            date.getFullYear() === thisDate.getFullYear()) {
            calendar.innerHTML += `<div class="days_current calendar today">` + i + `</div>`;
        }else
        calendar.innerHTML += `<div class="days_current calendar">` + i + `</div>`;
    }

    // 다음달 날짜 넣기
    for (let i = 1; i <= 6 - nextMonthLastDay; i++) {
        //이번달 끝나는 날짜가 28일 이고 월요일임.
        // 만약 끝나는 날짜가 토요일일 경우 추가할 필요없음
        calendar.innerHTML += `<div class="days_hidden calendar">` + i + `</div>`;
    }



}

renderCalendar();

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});


document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

// 오늘로 가기
document.querySelector('.today_date').addEventListener('click', () => {
    date.setFullYear(thisDate.getFullYear(), thisDate.getMonth());
    renderCalendar();
});




