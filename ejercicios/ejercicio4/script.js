function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert("Ingrese valores válidos para peso y estatura");
        return;
    }

    const imc = peso / (estatura * estatura);
    
    let clasificacion = "";

    if (imc < 18.5) clasificacion = "Bajo peso";
    else if (imc < 24.9) clasificacion = "Peso normal";
    else if (imc < 29.9) clasificacion = "Sobrepeso";
    else clasificacion = "Obesidad";

   const resultado = document.getElementById("resultado");
    resultado.textContent = `Tu IMC es: ${imc.toFixed(2)} (${clasificacion})`;
    resultado.style.display = "block";
}