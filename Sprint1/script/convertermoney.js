// FUNCION CONVERTIDOR DE MONEDA
function convertirMoneda() {
    let pesos = parseFloat(document.getElementById('pesos').value);
    let monedaSeleccionada = document.getElementById('moneda').value;
    console.log(monedaSeleccionada)
    const tasas = {
        dolar: 500, 
        euro: 600,  
        real: 100    
    };

    let equivalente = pesos / tasas[monedaSeleccionada];

    let resultadoTextArea = document.getElementById('resultado');
    resultadoTextArea.value =  `${equivalente.toFixed(2)}`;
}
