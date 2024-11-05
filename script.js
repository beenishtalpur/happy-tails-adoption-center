// For future functionality, if needed
function showHome() {
    // This function will be used later when integrating multiple pages
}

// Cost Calculation Function
function calculateCost() {
    const petType = document.getElementById("petType").value;
    const petSize = document.getElementById("petSize").value;
    const petAge = document.getElementById("petAge").value;
    let baseCost = 0;

    const petCosts = {
        dog: 50,
        cat: 30,
        rabbit: 20,
        bird: 10
    };

    baseCost += petCosts[petType] || 0;
    if (petSize === "medium") baseCost += 10;
    if (petSize === "large") baseCost += 20;
    if (petAge === "adult") baseCost += 5;
    if (petAge === "senior") baseCost += 15;

    document.getElementById("costResult").innerText = `Estimated Monthly Care Cost: $${baseCost}`;
}

// Function to go back to the homepage
function goBack() {
    window.location.href = "index.html"; // Redirect to homepage
}

// Function to validate the form
function validateForm() {
    const fields = ["firstName", "lastName", "email", "phone", "message"];
    let valid = true;
    fields.forEach(field => {
        if (!document.getElementById(field).value) {
            valid = false;
        }
    });

    if (valid) {
        document.getElementById("formResult").innerText = "Thank you! Your inquiry has been submitted.";
    } else {
        document.getElementById("formResult").innerText = "Please fill out all fields.";
    }
    return false; // Prevent form submission for demo purposes
}

// Function to go back to the homepage
function goBack() {
    window.location.href = "index.html"; // Redirect to homepage
}
