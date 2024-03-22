let num = 266219;
function multiply(num) {
  let result = 1;
  // Преобразуем число в строку, чтобы можно было итерировать по его цифрам
  let numStr = String(num);
  // Итерируем по каждой цифре числа
  for (let i = 0; i < numStr.length; i++) {
    // Преобразуем текущую цифру из строки обратно в число и умножаем на текущий результат
    result *= parseInt(numStr[i]);
  }
  return result;
}

console.log(multiply(num));
let myVarMultiply = multiply(num);

myVarMultiply **= 3;
console.log(myVarMultiply);

let strMyVarMultiply = String(myVarMultiply);
console.log(strMyVarMultiply.slice(0, 2));
