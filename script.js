const lang = prompt("Выберите язык", "например: ru или en");
const text_en =
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
const text_ru =
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье";
if (lang == "ru") {
  console.log(text_ru);
} else if (lang == "en") {
  console.log(text_en);
} else {
  console.log("Выберите язык, например: ru или en");
}

switch (lang) {
  case "ru":
    console.log(text_ru);
    break;
  case "en":
    console.log(text_en);
    break;
  default:
    console.log("Выберите язык, например: ru или en");
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

let namePerson = prompt("Выберите имя", "Артем, Александр, другое");
const role =
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент";
console.log(role);
