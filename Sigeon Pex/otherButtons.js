/* BUTTONS - PEXIA-HISTORY.HTML */

const viewManuscriptBtn = document.getElementById("viewManuscriptButton");
const historyBtn = document.getElementById("historyBtn")

/* CODE */

viewManuscriptBtn.addEventListener("click", function() {
    window.location.href = "verityManuscript.html"
});

historyBtn.addEventListener("click", function() {
    window.location.href = "pexiahistory.html"
});