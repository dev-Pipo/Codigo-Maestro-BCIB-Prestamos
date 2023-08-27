const verificacion = document.querySelector(".verificacion")

// calculo de intereses

const cacl = document.querySelector(".calcular")

function calcularPorcentaje (a, b){
    let interes;
        if(a <= 3)interes = 0.025; // 2.5%
        else if(a > 3 && a < 6) interes = 0.05; // 5% 
        else if(a >= 6 && a < 10) interes = 0.075 // 7.5% 
        else if (a >= 10 && a < 14) interes = 0.1 // 10%

    let operacion =  b * a * interes;
    return operacion
    }

function calcularTotal(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2
} 

function calcularCuota(a, b) {
   console.log(a/b)
    return a/b
}



cacl.addEventListener("click",()=>{
    const monto = document.querySelector(".amount").value;
    const meses = document.querySelector(".month").value;
    const tax = document.querySelector(".tax")
    const amountResult = document.querySelector(".amount-result")
    const monthTax = document.querySelector(".month-tax")

    let taxResult = calcularPorcentaje(meses, monto); 
    let final = calcularTotal(monto, taxResult);
    let taxMounth = calcularCuota(final, meses)

    amountResult.textContent = `Monto a devolver: $${final}`
    tax.textContent =`intereses: $${taxResult}`;
    monthTax.textContent =`Cuota mensual: $${taxMounth}`;
}
)

verificacion.addEventListener("click", ()=>{
    const monto = document.querySelector(".amount").value;
    if(monto == "") return
    else{
    let confirmar = confirm("Estas seguro de realizar esta operacion");
    
    if(confirmar == true) alert("Operacion a sido realizada con exito, los fondos seran sumados a tu cuenta en los proximos dias")
    else alert("Operacion cancelada")}
})