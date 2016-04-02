//push metoda

/*2. Dat je array:

var myArray = [["John", 23], ["cat", 2]];

koristeci funkciju push() dodati  ["dog", 3] unutar ovog dvodimenzionalnog arraya.*/

var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);

console.log(myArray);

//Iz istog arraya nakon toga izbaciti zadnji element koristeci pop() funkciju.

myArray.pop();

console.log(myArray);

//Nakon toga izbaciti prvi element iz arraya koristeci .hift() funkciju.

var first = myArray.shift();

console.log(myArray);

//5. Poslije toga dodajte neki drugi element na pocetak arraya koristeci funkciju unshift()

//unshift()

myArray.unshift(["Parrot", 4]);

console.log(myArray);

//6. Koristiti indexOf() funkciju naci "cat" u arrayu te onda koristeci splice obrisati cat i elemnt nakon tog.

var index = myArray.indexOf("cat");

//remove element from array
myArray.splice(index, 2);

console.log(myArray);
