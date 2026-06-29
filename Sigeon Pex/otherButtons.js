/* BUTTONS - PEXIA-HISTORY.HTML */

const viewManuscriptBtn = document.getElementById("viewManuscriptButton");
const historyBtn = document.getElementById("historyBtn");
const calcBtn = document.getElementById("calcBtn");

/* CODE */

if (viewManuscriptBtn) {
    viewManuscriptBtn.addEventListener("click", function() {
        window.location.href = "verityManuscript.html"
    });
}


if (historyBtn) {
    historyBtn.addEventListener("click", function() {
        window.location.href = "pexHistory.html"
    });
}

if (calcBtn) {
    calcBtn.addEventListener("click", function() {
    window.location.href = "404.html"
});
}