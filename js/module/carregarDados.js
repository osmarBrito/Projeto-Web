/*********************************************************************
 * Objetivo: projetoWeb
 * Data: 23/11/2024
 * Autor: Osmar e Wagner
 * Versão: 1.0
 *********************************************************************/

const setDadosFilmes = function (ListaDeFilmes){

    let filmes = document.getElementById('filmes');


    ListaDeFilmes.filmes.forEach(function(item){

        let divFilme        = document.createElement('div');
        let caixaTitulo     = document.createElement('h2');
        let h2TituloFilme   = document.createTextNode(item.nome);
        let figureImg       = document.createElement('figure');
        let imgFilme        = document.createElement('img');
        let caixaTexto      = document.createElement('p');
        let spanPreco       = document.createElement('span');
        let textoPreco      = document.createTextNode('Valor do filme: ');
        let pValorFilme     = document.createTextNode(item.valor);

        divFilme.setAttribute('id','card');
        imgFilme.setAttribute('src', item.image);
        imgFilme.setAttribute('alt', item.nome);
        imgFilme.setAttribute('title', item.nome);

        filmes.appendChild(divFilme);
        divFilme.appendChild(caixaTitulo);
        caixaTitulo.appendChild(h2TituloFilme);
        divFilme.appendChild(figureImg);
        figureImg.appendChild(imgFilme);
        divFilme.appendChild(caixaTexto);
        caixaTexto.appendChild(pValorFilme);
        caixaTexto.appendChild(spanPreco);
        spanPreco.appendChild(textoPreco);
        caixaTexto.appendChild(pValorFilme);

    });
}
const getFilmesAPI = async function(){
    //Link da url da API
    let url = 'https://app-avaliacao-brh0avd2ahegehac.brazilsouth-01.azurewebsites.net/projeto1/fecaf/listar/filmes'

    //Executa a URL utilizando o fetch
    let response = await fetch(url)

    //Converte os dados em json
    let dadosFilmes = await response.json()

    setDadosFilmes(dadosFilmes)

    console.log(dadosFilmes);
}

window.addEventListener('load', function(){
    
    getFilmesAPI()
})    

