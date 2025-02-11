const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const gridCont = document.getElementById('grid-container')
const resultPlaylist = document.getElementById('result-playlists')
const searchValue = searchInput.value

// Busca resultados da pesquisa na api
function requestApi(searchValue) {
    const url = `http://localhost:3000/artists?name_like=${searchValue}`//ta dando erro
    fetch(url)  // Busca dados na api
        .then((response) => response.json()) // Retorna uma resposta em json
        .then((results) => displayResults(results)) // Results é um objeto json com a resposta da busca    
        .catch((error) => {
            console.error('Houve um problema com a operação fetch:', error);
        });
};


// Mostra os resultados e oculta as playlists
function displayResults(results) {
    resultPlaylist.classList.add('hidden')  // Oculta as playlists

    results.forEach((element) => {  
    
        
        // Cria um elemento para o texto do card
        const artistName = document.getElementById('artist-name')
        artistName.classList.add('card-text')
        artistName.innerText = element.name

        // Cria um elemento para a imagem do card
        const artistImage = document.getElementById('artist-img')
        artistImage.classList.add('artist-img')
        artistImage.src = element.urlImg;

        // Posiciona os elementos
        gridCont.appendChild(artistName)
        gridCont.appendChild(artistImage)
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

    requestApi(searchValue)
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