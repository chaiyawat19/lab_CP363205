// เรียกใช้ function calculateBMI จากไฟล์ BMI_userModel.js
const calculateBMI = require('./BMI_userModel');

let result = calculateBMI(70, 1.75) // result = objects
// {
// bmi: '22.86',
// message: 'Normal weight'
// }
// console.log(result)
console.log(`BMI = ${result.bmi} ==> ${result.message}`);