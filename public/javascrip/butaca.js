const asientos = document.querySelectorAll('.asiento');
const checkInButton = document.getElementById('check-in');
const mensaje = document.getElementById('mensaje');
const cantidadInput = document.getElementById('cantidad');

let seleccionados = [];

asientos.forEach((asiento) => {
  asiento.addEventListener('click', () => {
    const cantidad = parseInt(cantidadInput.value);
    if (asiento.classList.contains('ocupado')) return;

    if (asiento.classList.contains('seleccionado')) {
      asiento.classList.remove('seleccionado');
      seleccionados = seleccionados.filter((i) => i !== asiento);
    } else if (seleccionados.length < cantidad) {
      asiento.classList.add('seleccionado');
      seleccionados.push(asiento);
    } else {
      mensaje.textContent = `Solo puedes seleccionar ${cantidad} asiento(s).`;
    }
  });
});

checkInButton.addEventListener('click', () => {
  const cantidad = parseInt(cantidadInput.value);
  if (!cantidad || cantidad < 1) {
    mensaje.textContent = 'Por favor, ingresa una cantidad de usuarios.';
    return;
  }

  if (seleccionados.length === cantidad) {
    seleccionados.forEach((asiento) => asiento.classList.add('ocupado'));
    const asientosConfirmados = seleccionados.map((a) => a.dataset.asiento).join(', ');
    mensaje.textContent = `Asientos ${asientosConfirmados} ocupados correctamente.`;
    seleccionados.forEach((a) => a.classList.remove('seleccionado'));
    seleccionados = [];
  } else {
    mensaje.textContent = `Selecciona ${cantidad} asiento(s) antes de hacer check-in.`;
  }
});

