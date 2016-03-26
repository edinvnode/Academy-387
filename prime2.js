
var arr = display(100000);

var sum = 0;

for (var a in arr) {
	sum = sum + arr[a];

	if (sum > 1000) {
		
		sum = sum - arr[a];
		break;
	}

}

console.log("Suma "+arr.length+" primarnih brojeva je: "+sum)
console.log("Posljednji primarni broj u sumi je: "+arr[a])


function isPrime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function display(n) {
	var arr = [2];
	for (var i = 3; i < n; i += 2) {
		if (isPrime(i)) {
			arr.push(i);
		}
	}

	console.log(arr); // use arr result on your ow

	return arr;
}
