// Функция, которая меняет склонение слова "час" в зависимости от числа
function getHourWord(number) {
  if (number === 1) {
    return "час";
  } else if (number >= 2 && number <= 4) {
    return "часа";
  } else {
    return "часов";
  }
}

// Функция для форматирования даты и времени в формате а) с учетом склонения слова "час"
function formatA(date) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
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
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hourWord = getHourWord(hours);

  return `Сегодня ${dayOfWeek}, ${dayOfMonth} ${month} ${year} года, ${hours} ${hourWord} ${minutes} минут ${seconds} секунд`;
}

// Функция, которая добавляет ведущий ноль к числам, если они меньше 10
function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

// Функция для обновления даты и времени на странице
function updateDateTime() {
  // Получаем текущую дату и время
  const currentDate = new Date();

  // Форматируем дату и время в формате а)
  const formattedDateA = formatA(currentDate);

  // Форматируем дату и время в формате б)
  const formattedDateB = `${addLeadingZero(
    currentDate.getDate()
  )}.${addLeadingZero(
    currentDate.getMonth() + 1
  )}.${currentDate.getFullYear()} - ${addLeadingZero(
    currentDate.getHours()
  )}:${addLeadingZero(currentDate.getMinutes())}:${addLeadingZero(
    currentDate.getSeconds()
  )}`;

  // Выводим отформатированную дату и время на страницу
  document.getElementById("formattedDate1").textContent = formattedDateA;
  document.getElementById("formattedDate2").textContent = formattedDateB;
}

// Устанавливаем интервал для вызова функции updateDateTime каждую секунду (1000 миллисекунд)
setInterval(updateDateTime, 1000);
