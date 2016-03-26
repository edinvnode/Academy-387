//stanje na tezgi

var jagode = 10;
var borovnica = 6;
var malina = 10;

//ako ima manje od 3 Kg jagoda uzmi kilu borovnica i 2kile malina
if (jagode < 3) {
	borovnica--;
	malina -= 2;
} else {
	jagode -= 3;
}

console.log(jagode);
console.log(borovnica);
console.log(malina);
