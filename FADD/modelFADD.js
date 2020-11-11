class UserModel {

    constructor() {

        this._nomeDia = "";

        this._imagem = "";

        this._title = "";

        this._explanation = "";
    }

    buscaFotoDay(daychoosed) {
        
        let request = new XMLHttpRequest();

        request.addEventListener("load", () => {
            
            if( request.status == 200 ) {

                let data = this._processaDados(request.responseText);

                this._atualizaDados(data);
            } 

        })

        let key = "5rwRbUSf6OPX9J2p1UtxXVgEshiFFdLaHac7hIUg"

        debugger;

        if(daychoosed == "") {
            request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=${key}`, false );
        } else {
            request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${daychoosed}`, false );
        }    
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

    // _processaDia() {
        
    //     let day = new Date();

    //     return day.

    
    // }

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
