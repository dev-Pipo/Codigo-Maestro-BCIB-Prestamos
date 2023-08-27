function()    
    let saldo = 23423;
    let saldoActual = document.getElementById('Saldo')
    saldoActual.textContent = `$${234234}`

function transferir(){    
    let saldo = parse(document.getElementById("saldo"));    
    let resto = document.getElementByClass("transfer-amount").value;
    /let destino = document.getElementById("transfer-destiny");/

    saldo = saldo - resto;
    saldo.textContent = saldo;


    

}