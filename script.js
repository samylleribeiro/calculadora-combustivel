function conferir() {
    // pega os dados que o usuário digitou
    let alcool = parseFloat(document.getElementById('alcool').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    let resultado = document.getElementById('resultado');
    // conferir se os campos estão vazios
    if (isNaN(alcool) || isNaN(gasolina)) {
        resultado.innerText = "Por favor, insira valores válidos para ambos os combustíveis ❌.";
        resultado.innerText = "Por favor, digite o valor do produto e a porcentagem da gorjeta! ❌";
    
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#2d1a1a"; // Fundo vinho escuro
        resultado.style.color = "#ff8a80"; // 🌟 Vermelho bem clarinho/pastel (perfeito para ler no escuro!)
    } else {
        document.body.style.backgroundColor = "#ffebee"; // Fundo rosa claro
        resultado.style.color = "#c62828"; // Vermelho escuro
    } 
    
    document.querySelector('.container-resultado').style.display = 'block';
    document.getElementById('alcool').focus();
        return;
    }
    // voltar para cor padrão se não der erro
    document.body.style.backgroundColor = ""; 
    resultado.style.color = ""; 
    let proporcao = alcool / gasolina;

    if (proporcao < 0.7) {
        resultado.innerText = "O álcool é mais vantajoso!🌿";
        document.body.style.backgroundColor = "#e8f5e9"; // Um verde bem suave
        resultado.style.color = "#2e7d32"; // Um verde mais forte para o texto
        // caixinha branca para exibir o resultado
        document.querySelector('.container-resultado').style.display = 'block';
    } else {
        resultado.innerText = "A gasolina é mais vantajosa! 🛢️";
        document.body.style.backgroundColor = "#fff3e0"; // Um laranja bem suave
        resultado.style.color = "#ef6c00"; // Um laranja mais forte para o texto

        document.querySelector('.container-resultado').style.display = 'block';
    }
}
function limpar() {
    let resultado = document.getElementById('resultado');
    document.getElementById('alcool').value = '';
    document.getElementById('gasolina').value = '';
    document.getElementById('resultado').innerText = '';
    document.body.style.backgroundColor = ""; 
    resultado.style.color = "";
     document.getElementById('alcool').focus();
    // esconde a caixinha branca do resultado
    document.querySelector('.container-resultado').style.display = 'none';
}
function toggleDarkMode() {
    // liga e desliga o modo noturno
    document.body.classList.toggle("dark-mode");
   // 2. Pega o botão lá no HTML pelo ID dele
    let botao = document.getElementById("btn-noturno");   
    // 3. Verifica se o body ESTÁ com o modo noturno ativado
    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; //  o botão vira Sol
    } else {
        botao.innerText = "🌙"; // o botão vira Lua
    }
}