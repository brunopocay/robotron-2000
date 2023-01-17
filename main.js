const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controller){
    const peca = controller.querySelector("[data-contador]")

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }
    else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const escolhacor = document.querySelectorAll(".colors");
const imagem = document.querySelector("#robotron");

escolhacor.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        escolhendoCor(evento.target.value, imagem.getAttribute("src"));
    })
})

function escolhendoCor(choices, chosen){

    if (choices === "opcao"){
        return 0;
    }
    else{
        chosen = imagem.setAttribute("src", "img/"+choices+"/robotron.png") 
    }
}




