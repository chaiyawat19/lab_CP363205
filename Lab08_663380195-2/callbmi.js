// เรียกใช้ function calculateBMI จากไฟล์ bmi.js
const calculateBMI = require('./bmi');

let result = calculateBMI(70, 1.75) // result = objects
// {
// bmi: '22.86',
// message: 'Normal weight'
// }
console.log(result)
console.log(`BMI = ${result.bmi} ==> ${result.message}`);