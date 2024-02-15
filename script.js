function expandirImagem(imagem) {
    if (imagem.classList.contains('expandida')) {
        
        imagem.classList.remove('expandida');
    } else {
        imagem.classList.add('expandida');
    }
}