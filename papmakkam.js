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

if (korisnik == "kamen" && computerChoice == "papir") {
	console.log("Izgubio si.");

} else if (korisnik == "kamen" && computerChoice == "makaze") {
	console.log("Dobio si.");
}

if (korisnik == "papir" && computerChoice == "makaze") {
	console.log("Izgubio si.");

} else if (korisnik == "papir" && computerChoice == "kamen") {
	console.log("Dobio si.");
}
if (korisnik == "makaze" && computerChoice == "kamen") {
	console.log("Izgubio si.");

} else if (korisnik == "makaze" && computerChoice == "papir") {
	console.log("Dobio si.");
}

if (korisnik == computerChoice) {
	console.log("Nerjeseno");
}

console.log(korisnik)
console.log(computerChoice)
