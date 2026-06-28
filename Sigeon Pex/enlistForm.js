/* DEFINITIONS */
const inputs = document.querySelectorAll("input");
const submitBtn = document.getElementById("recruit-submit");

/* CODE */

submitBtn.addEventListener("click", function() {
    const allFilled = [...document.querySelectorAll("input")].every(input => input.value.trim() !== "");

    if (allFilled) {
        window.location.href = "Home.html"
    }
});