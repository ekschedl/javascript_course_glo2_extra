function processString() {
  // Получаем ввод от пользователя
  const input = prompt("Введите произвольную строку:");

  // Проверяем, было ли что-то введено
  if (input === null || input === "") {
    return "Ошибка: Ничего не введено.";
  }

  // Проверяем, является ли входной аргумент строкой
  if (typeof input !== "string") {
    return "Ошибка: Введенный аргумент не является строкой.";
  }

  // Удаляем пробелы в начале и в конце строки
  const trimmedString = input.trim();

  // Если строка длиннее 30 символов, обрезаем ее и добавляем троеточие
  if (trimmedString.length > 30) {
    return trimmedString.slice(0, 30) + "...";
  }

  // Возвращаем результат
  return trimmedString;
}

// Вызываем функцию
console.log(processString());
