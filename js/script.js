// ketika page di buka 
window.onload = function () {
    // button text area 
    const convertButton = document.querySelector(".bg-1");
    const resetButton = document.querySelector(".bg-2");
    const reverseButton = document.querySelector(".bg-3");
    const input = document.querySelector("textarea[name='Konversi-input']");
    const output = document.querySelector("textarea[name='Result-input']");
    const detail = document.querySelector("textarea[name='calculate-detail']");

    // ketika tombol "Konversi" di klik 
    convertButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        let celcius = parseFloat(input.value); 

        if (isNaN(celcius)) {
            output.value = "";
            detail.value = "Masukkan angka yang benar.";
            return;
        }

        let fahrenheit = (celcius * 9 / 5) + 32;
        output.value = fahrenheit.toFixed(2);
        detail.value = celcius + " x 9/5 + 32 = " + fahrenheit.toFixed(2) + "°F";
    });

    // ketika tombol "Reverse" di klik 
    reverseButton.addEventListener("click", function (event) {
        event.preventDefault();

        let fahrenheit = parseFloat(output.value);
        if (isNaN(fahrenheit)) {
            input.value = "";
            detail.value = "Masukkan angka Fahrenheit yang benar.";
            return;
        }

        let celcius = (fahrenheit - 32) * 5 / 9;
        input.value = celcius.toFixed(2);
        detail.value = `(${fahrenheit} - 32) x 5/9 = ${celcius.toFixed(2)}°C`;
    });
};

