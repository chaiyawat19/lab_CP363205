
function calBMI(weight, height, callback) {
    console.log(`Calculating BMI for weight: ${weight} kg and height: ${height} m`);
    setTimeout(() => {
        const bmi = weight / (height * height);
        let message;
        if (bmi < 18.5) {
            message = "Underweight";
        } else if (bmi < 24.9) {
            message = "Normal weight";
        } else if (bmi < 29.9) {
            message = "Overweight";
        } else {
            message = "Obesity";
        }
        callback(bmi.toFixed(2), message);

    }, 3000);
    // console.log('ข้ามจ้า')
}

// calBMI(50, 1.56, (result, msg)=> {
//     console.log(`BMI: ${result}, Message: ${msg}`); 
// })

calBMI(50, 1.56, (result, msg)=> {
    console.log(`BMI: ${result} ==> ${msg}`);
    calBMI(45, 2.0, (result, msg)=> {
        console.log(`BMI: ${result} ==> ${msg}`);
        calBMI(60, 1.75, (result, msg)=> {
            console.log(`BMI: ${result} ==> ${msg}`);
        })
    }) 
})
// Callback Chain
// Callback hell อ่านยาก