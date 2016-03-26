//zadaci. zadatak za for i while petlju

/*

ZADATAK:
Napisati program koji printa šahovsku ploču gdje znak ''#" predstavlja crno polje a SPACE (prazan prostor) bijelo polje. Program treba imati jednu numeričku varijablu koju kad promijenimo mijenjamo dimenzije ploče. Npr ako je  "var duzina = 7" onda imamo ploču 7*7 koja izgleda ovako:

# # # #
 # # #
# # # #
 # # #
# # # #
# # #
# # # #

Zadatak uraditi na dva načina. Sa "for" petljom i sa "while" petljom.
 */

var hash = "#";

process.stdout.write("FOR PETLJA.");
process.stdout.write("\n");

for (var i = 1; i < 9; i++) {

	for (var j = 1; j < 8; j++) {

		if ((i % 2 != 0) && (j % 2 != 0)) {
			//console.log(hash);
			process.stdout.write(hash);
		}
		if ((i % 2 != 0) && (j % 2 == 0)) {
			process.stdout.write(" ");
		}
		if ((i % 2 == 0) && (j % 2 != 0)) {
			process.stdout.write(" ");
		}
		if ((i % 2 == 0) && (j % 2 == 0)) {
			process.stdout.write(hash);
		}

	}

	process.stdout.write("\n");

}

process.stdout.write("WHILE PETLJA.");
process.stdout.write("\n");

var i = 1;

while (true) {

	if (i > 8) {
		break;
	}
	
	
	var j = 1;
	
	while (true) {

		if (j > 7) {
			break;
		}

		if ((i % 2 != 0) && (j % 2 != 0)) {
			//console.log(hash);
			process.stdout.write(hash);
		}
		if ((i % 2 != 0) && (j % 2 == 0)) {
			process.stdout.write(" ");
		}
		if ((i % 2 == 0) && (j % 2 != 0)) {
			process.stdout.write(" ");
		}
		if ((i % 2 == 0) && (j % 2 == 0)) {
			process.stdout.write(hash);
		}

		j++;

	}

	process.stdout.write("\n");

	i++;
}
