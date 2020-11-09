class UserModel {

    constructor() {

        this._nomeDia = "";

        this._imagem = "";

        this._title = "";

        this._explanation = "";
    }

    buscaFotoDay() {
        
        let request = new XMLHttpRequest();

        request.addEventListener("load", () => {
            
            if( request.status == 200 ) {

                let data = this._processaDados(request.responseText);

                this._atualizaDados(data);
            } 

        })
        let key = "5rwRbUSf6OPX9J2p1UtxXVgEshiFFdLaHac7hIUg"
        
        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=${key}`, false );

        request.send();
    }


    _processaDados(responseText) {
        
        let response = JSON.parse(responseText);

        return response

    }

    _atualizaDados(dados) {
        
       this._nomeDia = dados.date;

       this._imagem = dados.url;

       this._title = dados.title;

       this._explanation = dados.explanation;

    }

    getDia() {

        return this._nomeDia

    }

    getImagem() {

        return this._imagem

    }

    getTitle() {

        return this._title

    }

    getExplanation() {

        return this._explanation

    }


}

class UserView {

    constructor() {

        

    }

    render(model) {

        let container = this.criaContainer();

        let data = document.querySelector(".data");

        let containerTitle = document.querySelector(".title");

        let containerExplanation = document.querySelector(".explanation");

        let containerPrincipal = document.querySelector(".container-principal");

        containerPrincipal.appendChild(container);
        
        let img = this.criaImg(model.getImagem());

        let day = document.createTextNode(model.getDia());

        let title = document.createTextNode(model.getTitle());

        let explanation = document.createTextNode(model.getExplanation());

        data.appendChild(day);

        containerTitle.appendChild(title);

        container.appendChild(img);

        containerExplanation.appendChild(explanation);

        
    }

    criaContainer() {
        
        let containerImg = document.createElement("div");

        containerImg.classList.add("container");

        return containerImg;
    }

    criaImg(link) {

        let faddImg = document.createElement("img");

        faddImg.setAttribute("src", `${link}`);

        return faddImg;


    }

    

    

}

class UserController {

    constructor() {

    }

    adicionaFoto() {
        
        let apodModel = new UserModel; 

        apodModel.buscaFotoDay();

        let apodView = new UserView;

        apodView.render(apodModel);
        
        document.querySelector("#botao-mostrar").removeEventListener("click", controller.adicionaFoto);
        
    }




}

let controller = new UserController();


document.querySelector("#botao-mostrar").addEventListener("click", controller.adicionaFoto);
    

    
