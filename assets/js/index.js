document.addEventListener('DOMContentLoaded', () => {
    let currentNews = 0;
    const news = [
        "Alerta de enchente na região Sul",
        "Medidas preventivas contra enchentes",
        "Como agir em caso de enchentes"
    ];
    const newsDisplay = document.getElementById('newsDisplay');
    
    function updateNews() {
        newsDisplay.innerText = news[currentNews];
        currentNews = (currentNews + 1) % news.length;
    }
    
    setInterval(updateNews, 3000); // Atualiza a cada 3 segundos
});

function scrollToCategories() {
    document.getElementById('categorias').scrollIntoView({ behavior: 'smooth' });
}

function showFundamento() {
    const fundamentoText = document.getElementById('fundamentoText');
    if (fundamentoText.style.display === "none") {
        fundamentoText.style.display = "block";
    } else {
        fundamentoText.style.display = "none";
    }
}

   // Seleciona todas as perguntas da FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique a cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Alterna a classe 'active' para a pergunta clicada
        question.classList.toggle('active');

        // Seleciona a resposta correspondente
        const answer = question.nextElementSibling;

        // Verifica se a resposta está visível
        if (answer.style.display === "block") {
            answer.style.display = "none"; // Oculta a resposta
        } else {
            answer.style.display = "block"; // Mostra a resposta
        }
    });
});

