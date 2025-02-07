document.getElementById("prediction-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let highbp = document.getElementById("highbp").value;
    let bmi = document.getElementById("bmi").value;

    let requestData = {
        "features": {
            "HighBP": parseInt(highbp),
            "BMI": parseFloat(bmi)
        }
    };

    let response = await fetch("https://your-backend-url.onrender.com/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    });

    let result = await response.json();
    document.getElementById("result").innerText = result.prediction;
});
