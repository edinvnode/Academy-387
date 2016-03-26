/*
2. Napisati program koji ce recenicu: "I code in javascript" napisati obrnuto, od zadnjeg slova do pvog.
 */

var text = "I code in javascript";

var start = text.length -1;
var str = "";

for (var i = start; i >= 0; i--) {

	str += text[i];

}

console.log(str)
