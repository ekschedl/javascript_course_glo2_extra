"use strict";

// Создаем массив с названиями дней недели
let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

// Получаем текущий день недели (в JS день недели от 0 до 6, где 0 - воскресенье, 1 - понедельник и т.д.)
let currentDayIndex = new Date().getDay();

// Для воскресенья (6) присваиваем значение 6, иначе вычитаем 1
for (let i = 0; i < 1; i++) {
  if (currentDayIndex === 0) {
    currentDayIndex = 6;
  } else {
    currentDayIndex -= 1;
  }
}

// Получаем контейнер, в который будем добавлять список дней недели
let daysContainer = document.getElementById("daysOfWeek");

// Проверяем, что контейнер существует
if (daysContainer) {
  // Создаем список и добавляем в него каждый день недели
  let list = document.createElement("ul");
  for (let i = 0; i < week.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = week[i];

    // Выделяем текущий день жирным шрифтом
    if (i === currentDayIndex) {
      listItem.style.fontWeight = "bold";
    }

    // Выделяем выходные дни курсивом
    if (i === 5 || i === 6) {
      listItem.style.fontStyle = "italic";
    }

    list.appendChild(listItem);
  }

  // Добавляем список на страницу
  daysContainer.appendChild(list);
}
