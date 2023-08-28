
let saldoActual = document.querySelector(".saldoActual");
let mostrame = document.querySelector(".mostrame");
let transferencia = document.querySelector(".trasferencia")
var montoDeSaldoBancario = 100000; // saldo de prueba
let pagarServicios = document.querySelector(".pagar")


saldoActual.textContent= `$${montoDeSaldoBancario}`

transferencia.addEventListener("click",()=>{ 
    let validar = confirm("seguro que quieres realizar esta trasferencia")
    if(validar == true){ 
    let restoBancario = document.querySelector(".transfer-amount").value;
    montoDeSaldoBancario -= restoBancario;
    saldoActual.textContent=`$${montoDeSaldoBancario}`;
    alert("su operacion a sido realizada con exito")}
    else alert("Su operacion a sido cancelada")}
    )

pagarServicios.addEventListener("click",()=>{ 
     let validar = confirm("seguro que quieres realizar esta trasferencia")
    if(validar == true){ 
    let restoBancario = document.querySelector(".transfer-amount").value;
    montoDeSaldoBancario -= restoBancario;
    saldoActual.textContent=`$${montoDeSaldoBancario}`;
    alert("su operacion a sido realizada con exito")}
    else alert("Su operacion a sido cancelada")}
    )