class Controller {

    constructor() {

    }

    addUser() {
        
        let userModel = new Model;

        let userName = document.querySelector(".inputa-user").value;

        userModel.findUser(userName);

        let userView = new View;

        userView.mostraNome(userModel.getNome());

        userView.mostraRepo(userModel.getRepo());

        userView.mostraLink(userModel.getRepoLink());

        userView.mostraLanguage(userModel.getRepoLanguage());

        userView.liberaDiv();


    }

}









let userController = new Controller;

document.querySelector(".botao-buscar").addEventListener("click", () => {
    userController.addUser();
});

