
// Seleciona todas as imagens da galeria
const images = document.querySelectorAll('.image-gallery img');

// Seleciona a caixa de descrição e o texto da descrição
const descriptionBox = document.getElementById('description-box');
const descriptionText = document.getElementById('description-text');

// Seleciona o botão de fechar
const closeBtn = document.getElementById('close-btn');

// Adiciona evento de clique em cada imagem
images.forEach(img => {
    img.addEventListener('click', () => {
        // Obtém a descrição associada à imagem
        const description = img.getAttribute('data-description');
        
        // Exibe a caixa de descrição com a descrição da imagem
        descriptionText.innerHTML = description;
        descriptionBox.style.display = 'flex'; // Torna a caixa visível
    });
});

// Adiciona evento de clique no botão de fechar
closeBtn.addEventListener('click', () => {
    descriptionBox.style.display = 'none'; // Oculta a caixa de descrição
});

// Adiciona evento para fechar a caixa de descrição clicando fora dela
descriptionBox.addEventListener('click', (e) => {
    if (e.target === descriptionBox) {
        descriptionBox.style.display = 'none'; // Fecha se clicar fora da caixa
    }
});
