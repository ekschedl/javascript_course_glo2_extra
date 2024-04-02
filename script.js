// Получаем текущую дату и время
const currentDate = new Date();

// Форматируем часы так, чтобы всегда было две цифры
const hours =
  currentDate.getHours() < 10
    ? "0" + currentDate.getHours()
    : currentDate.getHours();

// Форматируем минуты так, чтобы всегда было две цифры
const minutes =
  currentDate.getMinutes() < 10
    ? "0" + currentDate.getMinutes()
    : currentDate.getMinutes();

// Форматируем секунды так, чтобы всегда было две цифры
const seconds =
  currentDate.getSeconds() < 10
    ? "0" + currentDate.getSeconds()
    : currentDate.getSeconds();

// Определяем слово "час" с правильным склонением в зависимости от числа часов
const hourWord = (() => {
  const hours = currentDate.getHours();
  if (hours === 1) {
    return "час";
  } else if (hours >= 2 && hours <= 4) {
    return "часа";
  } else {
    return "часов";
  }
})();

// Определяем название текущего дня недели на русском языке
const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Определяем день месяца
const dayOfMonth = currentDate.getDate();

// Определяем название текущего месяца на русском языке
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const month = months[currentDate.getMonth()];

// Определяем текущий год
const year = currentDate.getFullYear();

// Форматируем дату и время в формате "Сегодня ДеньНедели, День Месяца Год года, Час Часов Минуты Секунды"
const formattedDateA = `Сегодня ${dayOfWeek}, ${dayOfMonth} ${month} ${year} года, ${hours} ${hourWord} ${minutes} минут ${seconds} секунд`;

// Форматируем дату и время в формате "День Месяца Год - Часы:Минуты:Секунды"
const formattedDateB = `${dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth}.${
  currentDate.getMonth() + 1 < 10
    ? "0" + (currentDate.getMonth() + 1)
    : currentDate.getMonth() + 1
}.${year} - ${hours}:${minutes}:${seconds}`;

// Выводим результат на страницу
document.getElementById("formattedDate1").textContent = formattedDateA;
document.getElementById("formattedDate2").textContent = formattedDateB;
