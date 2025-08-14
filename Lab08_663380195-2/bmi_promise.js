function calBMIPromise(weight, height) {
    console.log(`Calculating BMI for weight: ${weight} kg and height: ${height} m`);
    // create Pronise
    return new Promise((resolve) => {
        // Asynchronous การทำงานที่ไม่ต้องรอให้เสร็จทีละขั้น ตัวอย่างคือ setTimeout 3 วิ เพื่อจะเลียนแบบการทำงานแบบ Synchorous
        setTimeout(() => {
            const bmi = weight / (height * height)
            let message;
            if (bmi < 18.5) {
                message = "Underweight";
            } else if (bmi < 24.9) { 
                message = "Normal weight";
            } else if (bmi < 29.9) {
                message = "Overweight";
            }
            else {
                message = "Obesity";
            }
            resolve({ bmi: bmi.toFixed(2), message });
        }, 3000);
        // console.log("ข้ามจ้า")
    })       
}

calBMIPromise(50, 1.56)
.then(({bmi, message}) => {
    console.log(`BMI: ${bmi} ==> ${message}`);
    return calBMIPromise(45, 2.0);
})
.then(({bmi, message}) => {
    console.log(`BMI: ${bmi} ==> ${message}`);
    return calBMIPromise(60, 1.75);
}).then(({bmi, message}) => {
    console.log(`BMI: ${bmi} ==> ${message}`);
})

// Promise Chain