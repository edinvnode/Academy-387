//CALLBACK FUNCTION. CALLBACK FUNCKCIJA JE FUNKCIJA KOJA CEKA DA SE NESTO ZAVRSI

var fs = require('fs');

//PRIMJER CALLBACK FUNKCIJE. CALLBACK FUNKCIJA JE DRUGI PARAMETAR GLAVNE FUNKCIJE.
fs.readFile(process.argv[2], 'utf8', function name(err, data) {
	if(err) throw err;
	console.log(data.split("\n").length - 1);
})

console.log("Evo me ovdje.");
