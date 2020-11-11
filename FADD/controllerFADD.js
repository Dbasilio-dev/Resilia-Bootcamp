class UserController {

    constructor() {

    }

    adicionaFoto() {
        
        let apodModel = new UserModel; 

        let campoPesquisa = document.querySelector(".campo-pesquisa").value;

        apodModel.buscaFotoDay(campoPesquisa);

        let apodView = new UserView;

        apodView.render(apodModel);
        
        document.querySelector("#botao-mostrar").removeEventListener("click", controller.adicionaFoto);
        
    }




}

let controller = new UserController();


document.querySelector("#botao-mostrar").addEventListener("click", controller.adicionaFoto);

document.querySelector("#botao-pesquisa").addEventListener("click", controller.adicionaFoto);
    

    
