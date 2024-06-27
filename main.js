document.addEventListener("DOMContentLoaded", () => {

    const temp = document.querySelector("#temperatura");
    const btn = document.querySelector("#btnAction");
    const result = document.querySelector("#resultCelsius");
    
    btn.addEventListener("click", (event) => {
        event.preventDefault()

        const tempValue = parseFloat(temp.value);

        if (isNaN(tempValue)) {
            result.innerHTML = "Por favor, ingrese un número válido.";
            return;
        }

        const resultado = (tempValue - 32) * 5 / 9; 
        result.innerHTML = `${resultado.toFixed(2)} °C`;
    
    });
})
