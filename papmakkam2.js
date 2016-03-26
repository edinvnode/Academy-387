//napraviti program papir,makaze,kamen

var korisnik = prompt("Imate papir, makaze, kamen.");

var izbor = Math.random();

var computerChoice = "";

if (izbor <= 0.33) {
	computerChoice = "papir";
}
if (izbor > 0.33 && izbor < 0.66) {
	computerChoice = "makaze";
}
if (izbor >= 0.66) {
	computerChoice = "kamen";
}

if (korisnik == "kamen") {
	if (computerChoice == "makaze") {
		console.log("Dobio si.");
	} else if (computerChoice == "papir}") {
		console.log("Izgubio si.");
	}

}

if (korisnik == "papir") {
	if (computerChoice == "kamen") {
		console.log("Dobio si.");
	} else if (computerChoice == "makaze") {
		console.log("Izgubio si.");
	}

}

if (korisnik == "makaze") {
	if (computerChoice == "papir") {
		console.log("Dobio si.");
	} else if (computerChoice == "kamen") {
		console.log("Izgubio si.");
	}

}

/*
else 
{
	console.log("Unesite pravilno papir, makaze ili kamen.");
}

*/

console.log(korisnik)
console.log(computerChoice)
