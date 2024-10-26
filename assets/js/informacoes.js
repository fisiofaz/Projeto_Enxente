// Avisos importantes
document.addEventListener('DOMContentLoaded', () => {
    const alerts = [
        "Alerta de enchente na região central!",
        "Risco de deslizamento nas áreas montanhosas.",
        "Evacuação necessária em áreas baixas.",
    ];
    let currentAlert = 0;
    const alertMessage = document.getElementById('alertMessage');
    
    function updateAlert() {
        alertMessage.innerText = alerts[currentAlert];
        currentAlert = (currentAlert + 1) % alerts.length;
    }
    setInterval(updateAlert, 5000);

    // Linha do Tempo
    const events = [
        "Alerta emitido em 25/10 às 08:00",
        "Aviso de deslizamento em 24/10 às 19:00",
        "Chuva forte prevista em 23/10 às 14:00"
    ];
    const eventTimeline = document.getElementById('eventTimeline');
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventTimeline.appendChild(li);
    });

    // FAQ interativo
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Formulário de sugestões
    const suggestionForm = document.getElementById('suggestionForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    suggestionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        feedbackMessage.innerText = "Obrigado pelo seu relato! Vamos analisá-lo.";
        suggestionForm.reset();
    });
});
