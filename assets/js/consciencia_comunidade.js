// Quiz Interativo
function checkAnswer(answer) {
    const feedback = document.getElementById('quizFeedback');
    if (answer === 'correct') {
        feedback.innerText = "Correto! Buscar abrigo em áreas seguras é a melhor opção.";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Incorreto. O ideal é buscar abrigo em áreas seguras.";
        feedback.style.color = "red";
    }
}

// Validação Simples de Formulário
document.querySelector("form").addEventListener("submit", function(event) {
    alert("Obrigado por se inscrever para contribuir e ajudar!");
});
