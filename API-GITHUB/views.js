class View {

    constructor() {

    }

    mostraNome(name){
        // debugger;
        let displayName = document.querySelector(".profile-name");
        displayName.textContent = name;


    };

    mostraRepo(repos){

        let containerRepo = document.querySelector(".repos");
        
        
        repos.forEach((repo) => {
            
            let repoNames = document.createElement("p");

            repoNames.textContent = repo;

            containerRepo.appendChild(repoNames);
                
        })

    };

    mostraLink(links){
        
        let containerLink = document.querySelector(".repo-link");
        
        
        links.forEach((link) => {
            
            let repoLinks = document.createElement("p");

            repoLinks.textContent = link;

            containerLink.appendChild(repoLinks);
                
        })
    };

    mostraLanguage(languages){

        let containerLanguage = document.querySelector(".repo-language");
        
        
        languages.forEach((language) => {
            
            let repoLanguages = document.createElement("p");

            repoLanguages.textContent = language;

            containerLanguage.appendChild(repoLanguages);
                
        })

    };

    liberaDiv() {
        
        let containerConteudo = document.querySelector(".container-conteudo");

        let containerNome = document.querySelector(".profile-name");

        containerConteudo.classList.remove("invisivel");

        containerNome.classList.remove("invisivel");
    }
    
}