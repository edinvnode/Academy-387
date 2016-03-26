//functions, arrays


/*
var suma = 8;

//primjer funckije
var sabiranje = function (a, b) {
var suma = a + b;
console.log("Lokalni skoup: " + suma)
return suma;
}


sabiranje(3,1);
console.log("Globalni skoup: " + suma);

 */

var kreirajKvadrat = function (stranica, boja) {

	var povrsina = stranica * stranica;

	if (boja == undefined) {
		boja = "white";
	}

	//array ili niz
	var kvadrat = [povrsina, boja];
	console.log("Povrsina " + kvadrat[0])
	console.log("Boja " + kvadrat[1])

	return kvadrat;

}

//primjer niza. zadatak ucionica


/*
var ucionica=[["selma,nedzad"],["","Ognjen"],["tarik","milica"]];


var test=ucionica[0,2];

console.log(test)

ucionica[0,2,1]="nest";

console.log(ucionica[0,2,1])

console.log(kreirajKvadrat(3));

 */

//rekurzivna funkcija

var power = function (base, exponent) {

	var rezultat = base;

	if (exponent > 0) {

		exponent--;
		//rezultat = rezultat * base;
		return rezultat * power(base, exponent);

	} else {
		return 1;
	}

}

console.log(power(10, 3));
