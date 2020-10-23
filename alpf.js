var containerImg = document.querySelector(".container-imagem");

var botaoSeguir = document.querySelector(".button-next");

var containerBotao = document.querySelector (".action-button");

var dialogBox = document.querySelector(".question");

var containerRadio1 = document.querySelector(".choiceLeft");

var containerRadio2 = document.querySelector(".choiceRight");

var nome = "";

    // Criando radio left

var escolha1 = document.createElement("input");
escolha1.setAttribute("type", "radio");
escolha1.setAttribute("name", "escolha");

    // Criando radio Right

var escolha2 = document.createElement("input");
escolha2.setAttribute("type", "radio");
escolha2.setAttribute("name", "escolha");

    // Criando imgs

var img = document.createElement("img");
img.setAttribute("src", "imagens/homem-morto2.png");
img.classList.add("imagem-principal");

var imgDeath = document.createElement("img");
imgDeath.setAttribute("src", "imagens/you_died.gif");
imgDeath.classList.add("imagem-principal");

var imgDeadMan = document.createElement("img");
imgDeadMan.setAttribute("src", "imagens/homem-morto-ataca.gif");
imgDeadMan.classList.add("imagem-principal");

var imgGG = document.createElement("img");
imgGG.setAttribute("src", "imagens/mission-complete.gif");
imgGG.classList.add("imagem-principal");



function nomeIntroducao() {
    var txtValue = document.getElementById("input-name").value;

    nome = txtValue;

    dialogBox.innerHTML = `Em uma tarde aparentemente tranquila, na região de lake's hill, em um pequeno cazebre, longe de qualquer meio de comunicação com o mundo externo, se encontra <u>${nome}</u>, um veterano de guerra que, procurou refúgio dos acontecimentos que haverá presenciado.`;

    botaoSeguir.onclick = segundoDialogo
   
};  

function segundoDialogo() {
        
        // Criando texto de escolha
    var textoRadioLeft = document.createTextNode("Ir até a porta e abri-lá.");

    var textoRadioRight = document.createTextNode("Ir até a janela da frente, e olhar por ela.")
        
    dialogBox.innerHTML = `Em uma noite que parecia tranquila como as outras, ${nome} ouve um grunido na porta da frente de seu cazebre! `    
        
        // Adicionando eles a pagina.

    containerRadio1.appendChild(escolha1);

    containerRadio1.appendChild(textoRadioLeft);

    containerRadio2.appendChild(escolha2);

    containerRadio2.appendChild(textoRadioRight);

    botaoSeguir.onclick = terceiroDialogo 


}

function terceiroDialogo() {

    var escolhaUser = document.getElementsByName("escolha");
    if(escolhaUser[0].checked) {
        dialogBox.innerHTML = `${nome} vai até a porta, coloca a mão na maçaneta e algo sinistro acontece, ${nome} ouve um grunido ainda maior vindo de trás da porta. Amedrontado com esse som grotesco, ${nome} Larga a maçaneta e corre diretamente para a janela, e consegue visualizar um corpo que parece ser de um homem, e que parece também estar bastante ferido.`
    } else if(escolhaUser[1].checked) {
        dialogBox.innerHTML = `${nome}, ao se aproximar da janela, ouve um grunido ainda maior vindo de trás da sua porta dianteira! Oque o fez recuar alguns passos... rapidamente ao recuperar a coragem, ${nome} consegue olhar pela janela, e consegue visualizar um corpo que parece ser de um homem, e que parece também estar bastante ferido.`

    }
    containerImg.appendChild(img);

        // Removendo Botoes
    for(i = 0; i < 2; i++){
        containerRadio1.removeChild(containerRadio1.lastChild);
        containerRadio2.removeChild(containerRadio2.lastChild);
    }
        botaoSeguir.onclick = quartoDialogo
    
}

function quartoDialogo(){
    dialogBox.innerHTML =`${nome}, decide sair pela porta da frente, e se aproximar do indíviduo.<br><br> ${nome} tenta chamar o homem, porém o silêncio tenebroso permanece e rapidamente o pensamento que ${nome} teve ao ve-lo pela primeira vez, veio a tona! <br><br> ESTE HOMEM ESTÁ MORTO?!`

    var textoRadioLeft = document.createTextNode("Se aproximar do homem para checar seus sinais vitais.")

    var textoRadioRight = document.createTextNode("Olhar ao redor para procurar pistas.")
    containerRadio1.appendChild(escolha1);

    containerRadio1.appendChild(textoRadioLeft);

    containerRadio2.appendChild(escolha2);

    containerRadio2.appendChild(textoRadioRight);


    botaoSeguir.onclick = quintoDialogo;

}

function quintoDialogo(){
    var escolhaUser2 = document.getElementsByName("escolha");

    if(escolhaUser2[0].checked) {
        for(i = 0; i < 2; i++){
            containerRadio1.removeChild(containerRadio1.lastChild);
            containerRadio2.removeChild(containerRadio2.lastChild);
        }
        dialogBox.innerHTML = `Enquanto ${nome} se aproximava, ele notou que o grunido que antes houvera percebido, estava saindo da boca daquele homem... o som era quase inaudível. ${nome} fica tão impressionado com o estado daquele homem, que mal percebe que aquela criatura se moveu rapidamente e o agarrou!!<br><br> Por estar tão perto, não houve tempo para reações.`

        containerImg.removeChild(containerImg.lastChild);

        containerImg.appendChild(imgDeadMan);

        botaoSeguir.onclick = deathDialogo;

    } else if (escolhaUser2[1].checked) {
        dialogBox.innerHTML = `${nome} fica amedrontado ao ver o estado daquele homem, e ao olhar ao redor para captar o minímo de contexto cabível naquela situação. E ao olhar em direção a fazenda mais próxima, e oque ${nome} viu, o petrificou. <br> Haviam muitas pessoas mortas e muito, muito sangue. Foi tudo oque ${nome} conseguiu assímilar. Nesse momento de distração, o homem que parecia estar morto, se moveu rapidamente e o atacou!`

        containerImg.removeChild(containerImg.lastChild);

        containerImg.appendChild(imgDeadMan);

        for(i = 0; i < 2; i++){
            containerRadio1.removeChild(containerRadio1.lastChild);
            containerRadio2.removeChild(containerRadio2.lastChild);
        }

        var textoRadioLeft = document.createTextNode("Socar o cara.")

        var textoRadioRight = document.createTextNode("Correr e procurar seu veículo.")

        containerRadio1.appendChild(escolha1);

        containerRadio1.appendChild(textoRadioLeft);

        containerRadio2.appendChild(escolha2);

        containerRadio2.appendChild(textoRadioRight);

        botaoSeguir.onclick = deathChoice;
    } 
}

function deathChoice() {
    var escolhaUser3 = document.getElementsByName("escolha");
    if(escolhaUser3[0].checked) {
        for(let i = 0; i < 2; i++){
            containerRadio1.removeChild(containerRadio1.lastChild);
            containerRadio2.removeChild(containerRadio2.lastChild);
        }
        deathDialogo();
    } else if(escolhaUser3[1].checked) {
        sextoDialogo();
    }
}


function sextoDialogo() {
    containerImg.removeChild(containerImg.lastChild);
    dialogBox.innerHTML=`${nome} consegue correr em direção a seus veículos!!`
    for(i = 0; i < 2; i++){
        containerRadio1.removeChild(containerRadio1.lastChild);
        containerRadio2.removeChild(containerRadio2.lastChild);
    }
    var textoRadioLeft = document.createTextNode("Pegar o carro e seguir em direção a cidade mais próxima.")

    var textoRadioRight = document.createTextNode("Pegar van e seguir em direção a cidade mais próxima.")

    containerRadio1.appendChild(escolha1);

    containerRadio1.appendChild(textoRadioLeft);

    containerRadio2.appendChild(escolha2);

    containerRadio2.appendChild(textoRadioRight);

    botaoSeguir.onclick = setimoDialogo

   

}

function setimoDialogo() {
    var escolhaUser4 = document.getElementsByName("escolha");
    if(escolhaUser4[0].checked) {
        containerImg.appendChild(imgGG);
        dialogBox.innerHTML = "Você sobreviveu a esta noite!";
        botaoSeguir.setAttribute("value", "Jogar Novamente");
        botaoSeguir.addEventListener("click", function() {
            document.location.reload(true);
        });
        for(i = 0; i < 2; i++){
            containerRadio1.removeChild(containerRadio1.lastChild);
            containerRadio2.removeChild(containerRadio2.lastChild);
        }

    } else if(escolhaUser4[1].checked) {
        dialogBox.innerHTML = `${nome} corre rapidamente em direção a sua van! <br> <br> ${nome} repara que existem marcas de sangue na porta, mas no calor do momento, acaba as ignorando e entra no veículo. ${nome} consegue ligar a van, mas é surpreendido pelo filho de seu vizinho, que terrivelmente estava com aquela mesma aparência que o homem em sua porta! <br> Ele o ataca assim que você da a partida!!`;

        for(i = 0; i < 2; i++){
            containerRadio1.removeChild(containerRadio1.lastChild);
            containerRadio2.removeChild(containerRadio2.lastChild);
        }

        botaoSeguir.onclick = deathDialogo;
    }
}


function deathDialogo() {
    
    dialogBox.innerHTML = `VOCÊ MORREU!`;

    containerImg.removeChild(containerImg.lastChild);

    containerImg.appendChild(imgDeath);

    botaoSeguir.setAttribute("value", "Try Again");

    botaoSeguir.addEventListener("click", function() {
        document.location.reload(true);
    });

}