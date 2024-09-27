const checks = document.querySelectorAll('input[type="checkbox"]');
const seleccion = document.getElementById("seleccion");
const adicionales = document.getElementById("adicionales");
const extras = document.getElementById("extras");
const spanPropiana = document.getElementById("spanPropina");
const btn = document.getElementById("btn");


checks.forEach((box) => {
  box.addEventListener("change", () => {
    extras.innerHTML = "";
    seleccion.innerHTML = "";
    adicionales.innerHTML = "";
    let count = 0;
    sumar=0
    checks.forEach((e) => {
      if (e.checked) {
        count++;
        if (count <= 3) {
          seleccion.innerHTML += `<li>${e.value} , </li>`;
        } else {
          adicionales.innerHTML += `<li>${e.value} , </li>`;
          sumar += 800
          extras.innerHTML = `$${sumar}`;
          console.log(sumar);
        }
      }
    });
  });
});

spanPropiana.innerHTML = "$1.000";
btn.addEventListener("click", () => {
  const propina = document.getElementById("propina").value;

  if (propina <= 0 || propina <= 1000) {
    alert("Su propina de propina: $1.000 ha sido enviada.");
    spanPropiana.innerHTML = "$1.000";
  } else if (propina > 1000) {
    spanPropiana.innerHTML = `$${propina}`;
    alert(`Su propina de propina: $${propina} ha sido enviada.`);
  }
});