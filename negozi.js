// Função de pesquisa
function handleSearch(event) {
    // Permite disparar com o Enter no input ou com o clique no botão
    if (event.type === 'keydown' && event.key !== 'Enter') return;
    
    const searchInput = document.querySelector('.search-box input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        
        // Exibe se o título contiver o termo pesquisado, oculta se não contiver
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Inicialização dos eventos da pesquisa
document.addEventListener("DOMContentLoaded", () => {
    updateNav(); // Mantenha a chamada original
    
    // Conecta a busca ao botão e ao input
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keydown', handleSearch);
    }
});