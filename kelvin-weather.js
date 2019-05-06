// Variable initializing Kelvin temperature.
const kelvin = 293;
// Variable initializing Celsius temperature.
const celsius = kelvin - 273;
// Variable initializing Fahrenheit temperature.
let fahrenheit = celsius * (9/5) + 32;
// Variable initializing Newton temperature.
let newton = celsius * 33/100;
// Round down Fahrenheit to remove decimal.
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The tempature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${newton} degrees Newton.`);