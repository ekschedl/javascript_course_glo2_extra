// waiting for feedback from teacher

"use strict";

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

for (let i = 0; i < week.length; i++) {
  console.log(week[i]);
}

console.log(week);

let currentDate = new Date();
let currentDay = currentDate.getDay();

for (let i = 0; i < week.length; i++) {
  if (i === currentDay) {
    console.log(`%c${week[i]}`, "font-weight: bold");
  } else if (i === 5 || i === 6) {
    console.log(`%c${week[i]}`, "font-style: italic");
  } else {
    console.log(week[i]);
  }
}
