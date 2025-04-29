// ketika page di buka 
window.onload = function () {
    // button text area 
    const convertButton = document.querySelector(".bg-1");
    const input = document.querySelector("textarea[name='Konversi-input']");
    const output = document.querySelector("textarea[name='Result-input']");
    const detail = document.querySelector("textarea[name='calculate-detail']");

    // ketika button di click 
    convertButton.addEventListener("click", function (event) {
        // stop page dari refresh 
        event.preventDefault(); 

        // input derajat 
        let celcius = parseFloat(input.value); 

        if (isNaN(celcius)) {
            output.value = "";
            detail.value = "Masukkan angka yang benar.";
            return;
        }

        let fahrenheit = (celcius * 9 / 5) + 32;

        // nunjukin hasil nya 
        output.value = fahrenheit.toFixed(2); // 2 angka di belakang koma
        detail.value = celcius + " x 9/5 + 32 = " + fahrenheit.toFixed(2) + "°F";
    });
};
