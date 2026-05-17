function conferir() {
    let alcool = parseFloat(document.getElementById('alcool').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(alcool) || isNaN(gasolina)) {
        resultado.innerText = "Por favor, insira valores válidos para ambos os combustíveis ❌.";
        document.body.style.backgroundColor = "#ffebee"; // Um vermelho bem suave
        resultado.style.color = "#c62828"; // Um vermelho mais forte para o texto 
        return;
    }

    let proporcao = alcool / gasolina;

    if (proporcao < 0.7) {
        resultado.innerText = "O álcool é mais vantajoso!🌿";
        document.body.style.backgroundColor = "#e8f5e9"; // Um verde bem suave
        resultado.style.color = "#2e7d32"; // Um verde mais forte para o texto
    } else {
        resultado.innerText = "A gasolina é mais vantajosa! 🛢️";
        document.body.style.backgroundColor = "#fff3e0"; // Um laranja bem suave
        resultado.style.color = "#ef6c00"; // Um laranja mais forte para o texto
    }
}
function limpar() {
    let resultado = document.getElementById('resultado');
    document.getElementById('alcool').value = '';
    document.getElementById('gasolina').value = '';
    document.getElementById('resultado').innerText = '';
    document.body.style.backgroundColor = ""; 
    resultado.style.color = ""; 
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}