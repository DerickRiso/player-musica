function cumprimentar() {
    console.log(`${cumprimento}`)
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