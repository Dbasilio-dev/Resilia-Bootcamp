class Model {
    
    constructor() {
        this._nome = "";
        this._repoName = [];
        this._repoLink = [];
        this._repoLanguage = [];
    }

   findUser(user) {
        function requisicaoCompleta() {

        }
        let request = new XMLHttpRequest();
        
        request.addEventListener("load", () => {
           
            if(request.status == 200) {

                let response = request.responseText;
                
                let userJSON = this._transformaJSON(response);

                this._consomeDados(userJSON, user);
                
                return requisicaoCompleta
            }
        })
        
        request.open("GET", `https://api.github.com/users/${user}/repos`, false);
        request.send();
                
   } 


   _transformaJSON(response){
       
        return JSON.parse(response);
   }

   _consomeDados(userRepo, user){

        this._nome = user;

        userRepo.forEach((repo) => {

            this._repoName.push(repo.name);   
        })

        userRepo.forEach((repo) => {

            this._repoLink.push(repo.html_url);
               
        })

        userRepo.forEach((repo) => {

            this._repoLanguage.push(repo.language);
               
        })

   }


   getNome() {
    
        return this._nome;
        
   };

   getRepo() {

        return this._repoName;
   };

   getRepoLink() {
       
        return this._repoLink;
   };

   getRepoLanguage() {

        return this._repoLanguage;
   };
    
   
}
