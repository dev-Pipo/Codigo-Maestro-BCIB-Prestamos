// Simulación de Movimentos//

const movimientos = [
    { fecha: '2023-08-25', descripcion: 'Compra en tienda', monto: -600.00 },
    { fecha: '2023-08-24', descripcion: 'Transferencia', monto: 780.00 },
    { fecha: '2023-08-23', descripcion: 'Retiro en cajero', monto: -3000.00 }
   
  ]  
  
  // Función para cargar los movimientos en la página //
  function cargarMovimientos() {
    const movimientosList = document.getElementById('movimientos-list');
  
    movimientos.forEach((movimiento, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${movimiento.fecha}</span>
        <span>${movimiento.descripcion}</span>
        <span>${movimiento.monto > 0 ? '+' : '-'}$${Math.abs(movimiento.monto).toFixed(2)}</span>
      `;
  
      const detallesButton = document.createElement('button');
      detallesButton.innerHTML = '<p class="md">Más </br> Detalles</p>';
      detallesButton.addEventListener('click', () => mostrarDetalles(index));
  
      li.appendChild(detallesButton);
      movimientosList.appendChild(li);
    });
  }
  

  window.onload = cargarMovimientos;







