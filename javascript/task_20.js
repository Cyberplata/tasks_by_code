/*
Задача 20: Описать процедуру PowerA3(A, B), вычисляющую третью степень (куб) числа A и возвращающую ее в переменной B (A — входной, B — выходной параметр; оба параметра являются вещественными). С помощью этой процедуры найти третьи степени пяти любых чисел

Категория: Процедуры и функции

#category_proc
*/
let numbers = [5,3,1,2,6]

function PowerA3(a) {
  return a**3
}

for(let i = 0; i < numbers.length; i++) {
  console.log(`Число ${numbers[i]} в кубе = ${PowerA3(numbers[i])}`)
}