//napredne osnove

/*Napredne vjezbe:

7. Sortirati array i izbaciti duplikate:

[4, 3, 2, 5, 8, 3, 6, 10]*/

var myArr = [4, 3, 2, 5, 8, 3, 6, 10];

//for (var i = 0; i < myArr.length; i++) {}

myArr = Sort(myArr);

console.log(myArr);

myArr = RemoveDuplicates(myArr);

console.log(myArr);

//sort array from minimum to maximum
function Sort(arr) {

	var start = 1;

	for (var i = 0; i < arr.length; i++) {
		for (var j = start; j < arr.length; j++) {

			if (arr[i] > arr[j]) {

				var tmp = arr[j];

				arr[j] = arr[i];
				arr[i] = tmp;

			}

		}

		start++;
	}

	return arr;

}

//remove duplicates from array
function RemoveDuplicates(arr) {

	//ova petlja izbacuje duplikate;
	//korirsteno rjesenje sa stackoverflow

	//ako trenutni clan niza unutar niza ima index -1 pozovi push za taj clan niza
	var retArr = [];

	var isOriginal = arr.shift();

	if (arr.indexOf(isOriginal) < 0) {
		retArr.push(arr);
	}

	return retArr;

}
