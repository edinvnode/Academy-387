/* Osnovne vjezbel:

1. Dat je array:

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

Adresirati dati array tako da se u konzoli ispisu brojevi 8, 11 i 13 - jedan ispod drugog.

2. Dat je array:

var myArray = [["John", 23], ["cat", 2]];

koristeci funkciju push() dodati  ["dog", 3] unutar ovog dvodimenzionalnog arraya.

3. Iz istog arraya nakon toga izbaciti zadnji element koristeci pop() funkciju.

4. Nakon toga izbaciti prvi element iz arraya koristeci .hift() funkciju.


5. Poslije toga dodajte neki drugi element na pocetak arraya koristeci funkciju unshift()
6. Koristiti indexOf() funkciju naci "cat" u arrayu te onda koristeci splice obrisati cat i elemnt nakon tog.

Napredne vjezbe:

7. Sortirati array i izbaciti duplikate:

[4, 3, 2, 5, 8, 3, 6, 10]*/

//var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

//var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];

/*
ADRESIRANJE CEMO FORMIRATI NAKON ISPITIVANJA DUZINE POJEDINACNOG ELEMENTA OBJEKTA.
DUZINU ISPITUJEMO METODOM split(","). AKO JE DUZINA VECA OD 3 UVODIMO NOVI INDEX ADRESIRANJA.

POCETNI INDEX JE 1;
NOVI INDEX JE 4;
 */

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

console.log(myArray);

console.log("TRAZENI REZULTAT.");

for (var i = 2; i < myArray.length; i++) {

	var index1 = 1;

	var tmp = myArray[i].toString();
	var length = tmp.split(",").length;

	console.log(tmp.split(",")[index1]);

	if (length > 3) {
		var index2 = 3;

		console.log(tmp.split(",")[index2]);

	}

}
