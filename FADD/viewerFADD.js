class UserView {
    constructor() {
    }

    render(model) {

        let validador = false;

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

        if(validador == true) {
            
            data.removeChild(day);

            containerTitle.removeChild(title);

            container.removeChild(img);

            containerExplanation.removeChild(explanation);
        }

        data.appendChild(day);

        containerTitle.appendChild(title);

        container.appendChild(img);

        containerExplanation.appendChild(explanation);

        validador = true;

        
        
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
