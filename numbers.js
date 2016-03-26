/*


DAILY CHALLENGE #2

Napisati javascript program koji pretvara neku vrijednost celzijusa u farenhajte.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

BONUS

Za ove koji su malo napredniji bonus task da vam ne bude dosadno:


Prosti broj 41 može da se napiše kao suma 6 prostih brojeva zaredom:

41 = 2 + 3 + 5 + 7 + 11 + 13

Ovo je najveća suma prostih brojeva zaredom koja rezultuje brojem manji od 100 (u ovom slučaju 41) .
Najveća suma prostih brojeva zaredom koja daje rezultat manji od 1000 jeste 953 koja se dobije sabiranjem 21-og prostog broja zaredom.

Koji prosti broj manji od milion može da se napise kao suma najviše prostih brojeva zaredom*/

//niz da spremi sve pronadjene proste brojeve
var numArray = new Array();
var num = 1;

for (var j = 1; j < 10000; j++) {

	var leftOverFlag = false;

	for (var i = 1; i <= 1000000; i++) {

		if ((num % i) != 0) {
			leftOverFlag = true;
		}

		if (i == num) {
			break;
		}

	}

	num++;

	if (leftOverFlag == false) {
		numArray.push(num);
	}

} //end of main loop

console.log(numArray)
