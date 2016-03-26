/*

Ovaj kod pretvara vrijednost temperature iz farenhait u celzijus
formula: (t°F - 32) x .5556 = t°C;
 */

var tFarenheit = 50;
var tCelzius = 0;

//promjenite temperaturu unutar varible;

tCelzius = (tFarenheit - 32) * 0.5556;

console.log("Temperature je: "+tCelzius+" °C");
