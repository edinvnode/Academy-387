//while i do while petlja

var hash = "#";
var i = 0;
while (i < 10) {

	console.log(hash);

	hash += "#";
	i++;
}

var userAnswer = confirm("Da li zelite da nastavimo dalje.");

var brojLoopova = 0;

for (var i = 0; i > 0; i++) {
	userAnswer = confirm("Da li zelite da nastavimo dalje.");
	brojLoopova++;

	if (userAnswer == false) {
		break;
	}
}

alert("Vrtili smo " + brojLoopova + " puta.")
