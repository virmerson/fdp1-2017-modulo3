UsuarioService = function () {
    this.usuarios = [];

    //C REATE
    this.adicionar = function (usu) {
        this.usuarios.push(usu);
    }
    //R ETRIEVE
    this.buscarTodos = function (cb) {
  
    	
    	var xhttp = new XMLHttpRequest();
    	  xhttp.onreadystatechange = function() {
    	    if (this.readyState == 4 && this.status == 200) {
    	    		cb ( JSON.parse(this.responseText) );
    	    		 
    	    }
    	  };
    	  xhttp.open("GET", "usucontroller", true);
    	  xhttp.send();	
    	
    }
    //U PDATE
    this.alterar = function (indice, usu) {
        // alteracao no vetor
        this.usuarios.splice(indice, 1, usu);

    }
    //D ELETE
    this.excluir = function (indice) {
        //remover no vetor
        this.usuarios.splice(indice, 1);
    }

    this.buscarPorIndice = function (indice) {
        return this.usuarios[indice];
    }
}