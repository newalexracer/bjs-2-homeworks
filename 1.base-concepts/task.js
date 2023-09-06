"use strict"; // Входим в строгий режим
// ЗАДАЧА № 1
function solveEquation() {
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a, b, c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = " + result;
}
// Реализация функцию getResult(a,b,c)
function getResult(a, b, c) {
  let result = "";
  let discrim = b ** 2 - 4 * a * c; // Вычисляем дискриминант
  // Находим корень квадратного уровнения в зависимости от условия
  if (discrim < 0) {
    result = null;
    console.log(result);
  } else if (discrim == 0) {
    result = (-b + Math.sqrt(discrim)) / (2 * a);
    console.log(result);
  } else if (discrim > 0) {
    result = [
      (-b + Math.sqrt(discrim)) / (2 * a),
      (-b - Math.sqrt(discrim)) / (2 * a),
    ];
    console.log(result);
  }

  return result;
}
