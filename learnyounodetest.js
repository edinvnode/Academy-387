console.log(process.argv);

var sum=0;

for(var i=2;i<process.argv.length;i++)
{
	//pretvaranje u integer i sabiranje
	sum += parseInt(process.argv[i]);
}

console.log(sum);