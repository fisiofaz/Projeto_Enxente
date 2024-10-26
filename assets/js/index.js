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