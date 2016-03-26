//koristimo fs modul za citanje iz biblioteke

//pozivanje modula
var fs = require('fs');

//deklaracija fileBuffer za citanje i pisanje
var fileBuffer = fs.readFileSync(process.argv[2]);

var fileText = fileBuffer.toString();

//console.log(fileText);

var array = fileText.split("\n");

console.log(array.length - 1);
