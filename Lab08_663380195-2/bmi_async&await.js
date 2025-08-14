async function calBMIAsync(weight, height) {
    console.log(`Calculating BMI for weight: ${weight} kg and height: ${height} m`);
    return new Promise((resolve) => {
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
            resolve({ bmi: bmi.toFixed(2), message });
        }, 3000);
        console.log('ข้ามจ้า')
    });
}

async function main() {
    let result = await calBMIAsync(50, 1.56);
    // console.log("เทส")
    console.log(`BMI: ${result.bmi}, Message: ${result.message}`);
    result = await calBMIAsync(45, 2.0);
    console.log(`BMI: ${result.bmi}, Message: ${result.message}`);
    result = await calBMIAsync(60, 1.75);
    console.log(`BMI: ${result.bmi}, Message: ${result.message}`);
}

main()