const lang = prompt("Выберите язык", "например: ru или eng");
const text_eng =
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
const text_ru =
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье";
if (lang == "ru") {
  console.log(text_ru);
} else if (lang == "eng") {
  console.log(text_eng);
} else {
  console.log("Выберите язык, например: ru или eng");
}

switch (lang) {
  case "ru":
    console.log(text_ru);
    break;
  case "eng":
    console.log(text_eng);
    break;
  default:
    console.log("Выберите язык, например: ru или eng");
    break;
}
// честно признаюсь /этот вариант я гуглила, сама я такео еще не знаю, но логика понятна
const lang2 = prompt("Выберите язык, например: rus или eng");

const daysOfWeek = {
  rus: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  eng: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

const result = daysOfWeek[lang2] || "Выберите язык rus или eng";
console.log(result);
