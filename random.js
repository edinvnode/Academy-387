/*

Novi zadaci za petak su:

1. Napisati program koji ce da izmisli dva random broja izmedju jedan i deset te ta dva proja uporediti.

2. Napisati program koji ce recenicu: "I code in javascript" napisati obrnuto, od zadnjeg slova do pvog.

3. Napisati program koji  ce iz rijeci "Hamburger" da isprinda samo "burger".

Hint: Koristite funkciju substring() kao npr:


var str = "Hello world!";
var res = str.substring(1, 4);
console.log(res);


CONSOLE OUTPUT:

ell

 */

//dva broja

var broj1 = 10 * Math.random();
var broj2 = 10 * Math.random();

console.log("Prvi slucajan broj je: " + broj1);
console.log("Drugi slucajan broj je: " + broj2);

console.log(broj1 > broj2);
