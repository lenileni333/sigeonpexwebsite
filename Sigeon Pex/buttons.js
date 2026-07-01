/* BUTTONS - PEXIA-HISTORY.HTML */

const viewManuscriptBtn = document.getElementById("viewManuscriptButton");
const historyBtn = document.getElementById("historyBtn");
const calcBtn = document.getElementById("calcBtn");
const YesBtn = document.getElementById("YesHome");
const NoBtn = document.getElementById("NoHome");
const homeBtn = document.getElementById("index");

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
        window.location.href = "soneymex.html"
});
}

if (YesBtn) {
    YesBtn.addEventListener("click", function() {
        window.location.href = "enlist.html"
    });
}


if (NoBtn) {
    NoBtn.addEventListener("click", function() {
        window.location.href = "no.html"
    });
}

if (homeBtn) {
    homeBtn.addEventListener("click", function() {
        window.location.href = "index.html"
    });
}