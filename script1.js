const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const gridCont = document.getElementById('grid-container')
const cardArtist = document.getElementById('artist-card')
const resultPlaylist = document.getElementById('result-playlists')
const searchValue = searchInput.value

// Função assíncrona que faz busca na api
async function requestApi(searchValue) {
    // O await faz a função ser pausada até ser realizadoa busca e o retorno dela
    const response = await fetch("http://localhost:3000/artists");
    const dados = await response.json();
    
    // Cria uma expressão regular para a entrada do usuário
    const regex = new RegExp(searchValue);
    // Filtra os dados de acordo com a entrada
    const resultado = dados.filter(item => regex.test(item.name.toLowerCase()));
    // Chamada à função para exibição dos resultados
    displayResults(resultado);
    return resultado;
};


// Mostra os resultados e oculta as playlists
function displayResults(resultado) {
    resultPlaylist.classList.add('hidden')  // Oculta as playlists

    resultado.forEach((element) => {  
    
        // Cria um elemento para o texto do card
        const artistName = document.getElementById('artist-name')
        artistName.classList.add('artist-name')
        artistName.innerText = element.name

        // Cria um elemento para a imagem do card
        const artistImage = document.getElementById('artist-img')
        artistImage.classList.add('artist-img')
        artistImage.src = element.urlImg;

        // Posiciona os elementos
        gridCont.appendChild(cardArtist);
    });                                     
    

    resultsArtist.classList.remove('hidden')
}

document.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase()
    if (searchInput.value === '') {
        resultPlaylist.classList.remove('hidden')
        resultsArtist.classList.add('hidden')
        return;
    } 

    requestApi(searchValue).then(console.log);
});



// Mostra um cumprimento pelo horário do dia
function cumprimentar() {
    var res = document.getElementById('hello')
    var data = new Date()
    var hora = data.getHours()
    var cumprimento

    if (hora <= 4) {
        cumprimento = "Boa madrugada"
    } else if (hora >= 5 && hora < 12) {
        cumprimento = "Bom dia"
    } else if (hora >= 12 && hora < 18) {
        cumprimento = "Boa tarde"
    } else if (hora >= 18) {
        cumprimento = "Boa noite"
    }

    res.innerHTML = `${cumprimento}`
};