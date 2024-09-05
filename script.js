

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Função para aplicar o modo escuro baseado na preferência salva
function applyDarkModePreference() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Inicializa a preferência ao carregar a página
applyDarkModePreference();

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
