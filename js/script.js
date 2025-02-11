const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const gridCont = document.getElementById('grid-container');
const resultPlaylist = document.getElementById('result-playlists');
const searchValue = searchInput.value;

// Função assíncrona que faz busca na api
async function requestApi(searchValue) {
    // O await faz a função ser pausada até ser realizadoa busca e o retorno dela
    const response = await fetch("http://localhost:3000/artists");
    const dados = await response.json();
    
    // Cria uma expressão regular para a entrada do usuário e desconsidera case sensitive
    const regex = new RegExp(searchValue, 'i');
    // Filtra os dados de acordo com a entrada
    const resultado = dados.filter(item => regex.test(item.name));
    // Chamada à função para exibição dos resultados
    displayResults(resultado);
    return resultado;
};

// Mostra os resultados e oculta as playlists
function displayResults(resultado) {
    resultPlaylist.classList.add('hidden');  // Oculta as playlists
    gridCont.innerHTML = '';                 // Limpa tela quando o regex é atualizado

    resultado.forEach((element) => {  
        // Cria o card
        const cardArtist = document.createElement('div');
        cardArtist.classList.add('artist-card');

        // Cria o container da imagem
        const cardImg = document.createElement('div');
        cardImg.classList.add('card-img');

        // Cria o container do texto
        const cardText = document.createElement('div');
        cardText.classList.add('card-text');

        // Cria a categoria do card
        const categorie = document.createElement('span');
        categorie.classList.add('artist-categorie');
        categorie.innerText = "Artista";
    
        // Cria o texto do card
        const artistName = document.createElement('span');
        artistName.classList.add('artist-name');
        artistName.innerText = element.name;

        // Cria a imagem do card
        const artistImage = document.createElement('img');
        artistImage.classList.add('artist-img');
        artistImage.src = element.urlImg;;

        // Agrupa os elementos
        cardArtist.appendChild(cardImg);
        cardArtist.appendChild(cardText);
        cardImg.appendChild(artistImage);
        cardText.appendChild(artistName);
        cardText.appendChild(categorie);

        // Posiciona os elementos
        gridCont.appendChild(cardArtist);
    });                                     
    

    resultsArtist.classList.remove('hidden');
};

// Realiza a pesquisa quando o usuário digita
document.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    if (searchInput.value === '') {
        resultPlaylist.classList.remove('hidden');
        resultsArtist.classList.add('hidden');
        return;
    } 

    requestApi(searchValue).then(console.log);
});