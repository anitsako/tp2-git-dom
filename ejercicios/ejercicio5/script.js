function mostrarCampos() {
  const forma = document.getElementById("forma").value;
  document.getElementById("campos-forma-A").style.display = forma === "A" ? "block" : "none";
  document.getElementById("campos-forma-B").style.display = forma === "B" ? "block" : "none";
}

function calcularArea() {
  const forma = document.getElementById("forma").value;
  let area = 0;
  const resultado = document.getElementById("resultado");

  if (forma === "A") {
    const base = parseFloat(document.getElementById("baseA").value);
    const alturaRect = parseFloat(document.getElementById("alturaRect").value);
    const alturaTri = parseFloat(document.getElementById("alturaTri").value);

    if (
      isNaN(base) || base <= 0 ||
      isNaN(alturaRect) || alturaRect < 0 ||
      isNaN(alturaTri) || alturaTri < 0
    ) {
      alert("Ingrese valores válidos para la forma A.");
      return;
    }

    area = (base * alturaRect) + ((base * alturaTri) / 2);
  } 
  
  else if (forma === "B") {
    const baseMayor = parseFloat(document.getElementById("baseMayor").value);
    const baseMenor = parseFloat(document.getElementById("baseMenor").value);
    const altura = parseFloat(document.getElementById("alturaTrap").value);

    if (
      isNaN(baseMayor) || baseMayor <= 0 ||
      isNaN(baseMenor) || baseMenor <= 0 ||
      isNaN(altura) || altura <= 0
    ) {
      alert("Ingrese valores válidos para la forma B.");
      return;
    }

    area = ((baseMayor + baseMenor) * altura) / 2;
  }

  resultado.textContent = `Área total del terreno (forma ${forma}): ${area.toFixed(2)} m²`;
  resultado.style.display = "block";
}

function reiniciarFormulario() {
  document.querySelector("form").reset();
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";
  resultado.style.display = "none";
  mostrarCampos();
}
