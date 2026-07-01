/* DEFINITIONS */
const exchangeRate = 2;

/* CODE */ 

function IGCtoPXD() {
    const IGC = document.getElementById("igcInput").value;
    const pxdResult = IGC * exchangeRate;

    document.getElementById("pxdInput").value = IGC ? pxdResult.toFixed(2) : "";
}

function PXDtoIGC() {
    const PXD = document.getElementById("pxdInput").value;
    const igcResult = PXD / exchangeRate;

    document.getElementById("igcInput").value = PXD ? igcResult.toFixed(2) : "";
}