
/* Переменные
Объявите две переменные: firstName и lastName.
Присвойте значение “John” переменной firstName и значение “Adams” переменной lastName.
Выведите в консоль значение firstName и lastName (должно показать John Adams).
Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Brandon Smith).

В итоге на экране должно быть две строки:
John Adams
Brandon Smith */
console.log("==================var===================");

var firstName;
var lastName;
firstName = "John";
lastName = "Adams";
console.log(firstName + " " + lastName);
firstName = "Brandon";
lastName = "Smith";
console.log(firstName + " " + lastName);

/*Выведите в консоль тип данных следующих переменных (использовать метод typeof())*/
console.log("===============typeof()================");

let a
let c = 9
let str = "Hi 5!"
let b = true
let y = 9 + '1'
let x = 'a' / 6
console.log("result typeof let a is ",typeof(a));
console.log("result typeof let c is ",typeof(c));
console.log("result typeof let str is ",typeof(str));
console.log("result typeof let b is ",typeof(b));
console.log("result typeof let y is ",typeof(y));
console.log("result typeof let x is ",typeof(x));

/*Подумайте, какие переменные логично объявить через const , пропишите их и выведите на экран*/
console.log("=================const==================");

const kg = 1000; //gr in 1 kg
let sum = kg*3
console.log("тип данных sum = ",typeof(sum),"результат sum = ",sum," gr");


/*Проверьте какие числа находятся между 10 и 20 и выведете на печать для каждой цифры true или false*/
console.log("===============true/false================");

for(num = 10; num < 26; num++){
    if (num > 10 && num < 21) {
        console.log(num, " is true");
    }
    if (num > 20 && num < 26){
        console.log(num, " is false");
    }
}
//Что выведет код и почему:
//console.log( null || 2 || undefined );
{
console.log("======( null || 2 || undefined )====");

const x = 5;
const y = 10;

console.log("x > 0 && y < 20 is ", x > 0 && y < 20);
console.log("x < 0 && y > 0 is ", x < 0 && y > 0);
console.log("x < 0 && y < 0 is ", x < 0 && y < 0);
console.log("x > 0 && 'Hello' is ", x > 0 && "Hello");

const a = 0;
const b = "World";

console.log("a > 0 || b.length > 0 is ", a > 0 || b.length > 0);
console.log("a > 0 || b.length === 0 is ", a > 0 || b.length === 0);
console.log("a > 0 || '' is ", a > 0 || "");
console.log("a < 0 || 'Hello' is ", a < 0 || "Hello");
console.log("null || 2 || undefined is ", null || 2 || undefined )

console.log("===============END===============");
}
