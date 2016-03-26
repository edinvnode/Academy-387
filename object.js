//kako se kreira objekat
//primjer iz knjige Eloquent JavaScript. STR 64


//ovaj nacin prestavljanja objekta se naziva JSON.
var house = {

	//properties. svojstva objekta.
	floors : 2,
	windows : 10,
	garage : true,
	isGarageOpen : false,
	owner : "Edin",
	location : "Ilidza",

	//metode == funkcije

	//sintaksa unutar objekta
	openGarage : function (isGarageOpen) {
		//house.isGarageOpen=false;
		if (isGarageOpen == true) {
			//console.log(house.isGarageOpen);
			console.log("It's already opened.");
		} else {
			isGarageOpen = true;
			//console.log(house.isGarageOpen);
		}
	}
}

//primjer deklaracije objekata
var array = [];
var broj = 3;
var nesto = function () {};

function nestodrugo() {};

console.log(house.owner)

//promjena object property

house.owner = "Azra";

console.log(house.owner);

//console.log(house.isGarageOpen);
//poziv metode
//house.openGarage();

house.isGarageOpen=house.openGarage(house.isGarageOpen);

var kuca = new house;
kuca.owner ="Milica";

console.log(house.owner);
console.log(kuca.owner);



