function Coletar() {
    let Nome = document.querySelector('.input-time').value
    console.log(Nome)
    Dados(Nome)
}

async function Dados(Nome) {
    let dados = await fetch(`https://apiv2.apifootball.com/?action=get_players&player_name=${Nome}&APIkey=d04c1d3f54967569e9a471e59238069be8c0306ed2505d9b16e380f722b96b0d`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)

}
function ExibirDados(dados) { 
    document.querySelector('.Clube').innerHTML = "Clube: " + dados[0].team_name
    document.querySelector('.Idade').innerHTML = "Idade: " + dados[0].player_age
    document.querySelector('.País').innerHTML = "País: " + dados[0].player_country
    document.querySelector('.resultados').style.display = 'block'

}