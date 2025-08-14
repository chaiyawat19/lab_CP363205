function calculateBMI(weight, height) {
    console.log(`Calculating BMI for weight: ${weight} kg and height: ${height} m`);
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
    return {
        bmi: bmi.toFixed(2),
        message: message
    }
    // {
    // bmi: '22.86',
    // message: 'Normal weight'
    // }
}

module.exports = calculateBMI

// ระบุว่าไฟล์นี้ “ส่งออก” function calculateBMI ไปให้ไฟล์อื่นใช้