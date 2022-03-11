let date2 = new Date();
const weekdays = [
    "일", "월", "화", "수", "목", "금", "토"
];

const year = date2.getFullYear();
const month = date2.getMonth() + 1;
const day = date2.getDate();
const weekday = weekdays[date2.getDay()];


const todayElement = document.querySelector(".today_date");


function showDate() {
    todayElement.innerText = `${year}년 ${month}월 ${day}일 ${weekday}요일`;
    todayElement.addEventListener("click,")
}


showDate();