//zadatak 2
/*
OPIS ZADATKA:
Imamo korisnika koji ce u penziju. Ako ima manje od
63 gidine nemoze u penziju. Ako ima vise moze.

 */
var radnik = 63;


if (radnik == 63) {
	console.log("Vrijeme je za penziju. Ima " + radnik + " godine");
} else if (radnik > 63) {
	console.log("Radnik je odavno u penziji. Ima " + radnik + " godine");
} else {
	console.log("Radnik nemoze u penziju. Ima " + radnik + " godine");
}
