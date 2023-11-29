function actualizarReloj() {
    const ahora = new Date();
  
    const opcionesFecha = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const fechaActual = ahora.toLocaleDateString('es-ES', opcionesFecha);
  
    const opcionesHora = { hour: "numeric", minute: "numeric", second: "numeric", hour12: true };
    const horaActual = ahora.toLocaleTimeString("en-US", opcionesHora);
  
    const segundos = ahora.getSeconds();
    const periodo = ahora.toLocaleTimeString("en-US", { hour12: true }).slice(-2);
  
    document.getElementById('dia').innerText = fechaActual;
    document.getElementById('hora').innerText = horaActual.split(':')[0] + ':' + horaActual.split(':')[1];
  
    const fraccionSegundos = document.createElement('div');
    fraccionSegundos.innerHTML = `<div>${segundos < 10 ? '0' + segundos : segundos}</div><div>${periodo}</div>`;
    document.getElementById("fraccion").innerHTML = "";
    document.getElementById("hora").appendChild(fraccionSegundos);
  }
  setInterval(actualizarReloj, 1000);
  actualizarReloj();