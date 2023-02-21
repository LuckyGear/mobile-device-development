import { Celsius } from "./suhu.js";
import kalkulasiBMI, {kategoriBMI} from "./berat.js";

const temperatur = 99.20;
const celcius = Celsius(temperatur);
console.log(`${temperatur} Fahrenheit = ${celcius.toFixed(2)} Celcius`);

const bb = 85;
const tb = 1.80;
const bmi = kalkulasiBMI(bb, tb).toFixed(2);
const kategori = kategoriBMI(bmi);
console.log(`BMI : ${bmi} (${kategori})`);