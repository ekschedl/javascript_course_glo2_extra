function multiplyDigits(num) {
  let result = 1;
  // Преобразуем число в строку, чтобы можно было итерировать по его цифрам
  const numStr = String(num);
  // Итерируем по каждой цифре числа
  for (let i = 0; i < numStr.length; i++) {
    // Преобразуем текущую цифру из строки обратно в число и умножаем на текущий результат
    result *= parseInt(numStr[i]);
  }
  return result;
}
let num = 266219;
console.log(multiplyDigits(num));
let myVarMultiplyDigits = multiplyDigits(num);

myVarMultiplyDigits **= 3;
console.log(myVarMultiplyDigits);

let strMyVarMultiplyDigits = String(myVarMultiplyDigits);
console.log(strMyVarMultiplyDigits.substring(0, 2));
