UsuarioService = function () {
    this.usuarios = [];

    //C REATE
    this.adicionar = function (usu, sucesso, erro) {
    	
      	var xhttp = new XMLHttpRequest();
    		xhttp.onreadystatechange = function() {
     	  
     	   	if (this.readyState == 4){ 
     	   		if ( this.status == 200) {
     	   		 sucesso();
     	   		}else{
     	   			erro();
     	   		}
     	   		
     	   	}
     	  
    		};
     	 xhttp.open("POST", "usucontroller", true);
     	 xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     	 xhttp.send(usu);
     
     	 	
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
    this.excluir = function (id, cb) {
        //remover no vetor
        
    		var xhttp = new XMLHttpRequest();
	  	  xhttp.onreadystatechange = function() {
	  	    if (this.readyState == 4 && this.status == 200) {
	  	    		cb();
	  	    		 
	  	    }
	  	  };
	  	  xhttp.open("DELETE", "usucontroller?id="+id, true);
	  	  xhttp.send();
    	
    		//this.usuarios.splice(indice, 1);
    }

    this.buscarPorId= function (id, cb) {
     	var xhttp = new XMLHttpRequest();
	  	  xhttp.onreadystatechange = function() {
	  	    if (this.readyState == 4 && this.status == 200) {
	  	    		cb ( JSON.parse(this.responseText) );
	  	    		 
	  	    }
	  	  };
	  	  xhttp.open("GET", "usucontroller?id="+id, true);
	  	  xhttp.send();	
    }
}