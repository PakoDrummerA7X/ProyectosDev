document.getElementById("convertir").addEventListener("click", function() {
    // Obtener el valor del monto y la moneda seleccionada
    var monto = parseFloat(document.getElementById("monto").value);
    var moneda = document.getElementById("moneda").value;
    
    // Realizar la conversión
    var resultado = 0;

    if (moneda === "mxn") {
        resultado = monto * 1; // Tasa de cambio ficticia
    } else if (moneda === "usd") {
        resultado = monto * 18.13; // Tasa de cambio ficticia
    } else if (moneda === "cad") {
        resultado = monto * 13.25;
    } else if (moneda === "eur") {
        resultado = monto * 19.35;
    } else if (moneda === "yen") {
        resultado = monto * 0.12;
    }
    // Mostrar el resultado
   
    document.getElementById("resultado").textContent = resultado.toFixed(2);
});