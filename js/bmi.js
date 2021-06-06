window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let dyna_mess = document.querySelector("#dyna_mess");
    let advice = document.querySelector("#advice");
    let cal = document.querySelector("#cal");

    var calBmi = weight / (Math.pow(height, 2));
    calBmi = Math.round(calBmi * 10) / 10;

    if (calBmi < 18.5) {
        advice.innerHTML = "You are underweight. This can be a risk to your health. Contact your doctor. This is especially important if you have lost a lot of weight in a short time, without knowing how this happens.";
        dyna_mess.style.backgroundColor = "#feb042";
        cal.innerHTML = calBmi;
    } else if (calBmi < 24.9) {
        advice.innerHTML = "You have a healthy weight. A healthy weight is important to prevent cardiovascular disease.";
        dyna_mess.style.backgroundColor = "#2c9e3c";
        cal.innerHTML = calBmi;
    } else if (calBmi < 29.9) {
        advice.innerHTML = "You are overweight. That means an increased risk of cardiovascular disease. Try to lose weight by eating healthy and exercising more. A lot of fat around your stomach is an extra risk. Therefore measure your waist circumference";
        dyna_mess.style.backgroundColor = "#ff005e";
        cal.innerHTML = calBmi;
    } else if (calBmi < 34.9) {
        advice.innerHTML = "You are seriously overweight (obese). That means a high risk of cardiovascular disease. Try to lower your weight. Every kilo less counts. By eating healthy and exercising more, you lower your risk. Ask your doctor for advice.";
        dyna_mess.style.backgoundColor = "#c72121";
        cal.innerHTML = calBmi;
    } else {
        advice.innerHTML = "You are seriously overweight (extreme obesity). That means a very high risk of cardiovascular disease. Try to lower your weight. Every kilo less counts. By eating healthy and exercising more, you lower your risk. Ask your doctor for advice.";
        dyna_mess.style.backgroundColor = "#8c181b";
        cal.innerHTML = calBmi;
    }

}