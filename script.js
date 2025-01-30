const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchValue) {
    const url = `http://localhost:3000/artists?name_like=${searchValue}`
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results)) 
}

function displayResults(results) {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    // Precisa criar elementos dinâmicamente, caso contrário irá mostrar apenas um ultimo dado
    results.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    })

    resultsArtist.classList.remove('hidden')
}

document.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase()
    if (searchInput.value === '') {
        resultPlaylist.classList.add('hidden')
        resultsArtist.classList.remove('hidden')
        return;
    } 

    requestApi(searchValue)
})


















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
}