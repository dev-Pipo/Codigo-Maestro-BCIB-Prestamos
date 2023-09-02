
let saldoActual = document.querySelector(".saldoActual");
let mostrame = document.querySelector(".mostrame");
let transferencia = document.querySelector(".trasferencia")
var montoDeSaldoBancario = 100000; // saldo de prueba
let pagarServicios = document.querySelector(".pagar")


saldoActual.textContent= `$${montoDeSaldoBancario}`;

transferencia.addEventListener("click",()=>{ 
    let restoBancario = document.querySelector(".transfer-amount").value;
    if(montoDeSaldoBancario < restoBancario) return alert("saldo insuficiente")
    let validar = confirm("seguro que quieres realizar esta trasferencia")
    if(validar == true){ 
    montoDeSaldoBancario -= restoBancario;
    saldoActual.textContent=`$${montoDeSaldoBancario}`;
    alert("su operacion a sido realizada con exito")}
    else alert("Su operacion a sido cancelada")}
    )

   pagarServicios.addEventListener("click",()=>{ 
        let restoBancario = document.querySelector(".pay-amount").value;
        if(montoDeSaldoBancario < restoBancario) return alert("saldo insuficiente")
        let validar = confirm("seguro que quieres realizar esta trasferencia")
        if(validar == true){ 
        montoDeSaldoBancario -= restoBancario;
        saldoActual.textContent=`$${montoDeSaldoBancario}`;
        alert("su operacion a sido realizada con exito")}
        else alert("Su operacion a sido cancelada")}
        )