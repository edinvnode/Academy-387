//program sahovska ploca
/*

# # # #
# # #
# # # #
# # #
# # # #
# # #
# # # #
# # #

Napraviti funkciju koja pomjera lovca na sahovskoj ploci


 */

var pocetna = [4, 4];
var krajnja = [4, 3];

console.log(pomjeriLovca(pocetna, krajnja));
console.log(pomjeriTopa(pocetna, krajnja));

function pomjeriLovca(pocetna, krajnja) {

	var razlika_x = pocetna[0] - krajnja[0];

	if (razlika_x < 0) {
		razlika_x = razlika_x * (-1);
	}

	var razlika_y = pocetna[1] - krajnja[1];

	if (razlika_y < 0) {
		razlika_y = razlika_x * (-1);
	}

	if (razlika_x != razlika_y) {
		return "Lovac nemoze da ide na tu poziciju sa trenutne!";
	} else {
		return "Lovac moze da ide na tu poziciju."
	}

}

function pomjeriTopa(pocetna, krajnja) {

	if ((pocetna[0] == krajnja[0]) || (pocetna[1] == krajnja[1]) || (pocetna[1] == krajnja[0]) || (pocetna[0] == krajnja[1])) {
		return "Top moze da ide na tu poziciju sa trenutne!";
	} else {
		return "Top nemoze da ide na tu poziciju."
	}

}
