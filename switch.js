//switch clause

//if(userChoice=="makaze")

//var userChoice = prompt("Izaberite jedno(kamen, makaze, papir).");

var computerChoice = Math.random();

console.log(computerChoice);

switch (true) {

case computerChoice < 0.33:
	computerChoice = "kamen";
	console.log(computerChoice);
	break;

case computerChoice >= 0.33 && computerChoice < 0.66:
	computerChoice = "makaze";
	console.log(computerChoice);
	break;
case computerChoice >= 0.66:
	computerChoice = "papir";
	console.log(computerChoice);
	break;

default:
	console.log("Pisite korektno.");

}

//ako je
