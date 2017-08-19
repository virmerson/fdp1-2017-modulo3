UsuarioController = function () {

    this.usuarioService = new UsuarioService();

    this.modoEdicao = false;

    //Renderização
    this.renderizarTabelaUsuarios = function (arrUsuarios) {

        dados = "";
        for (i = 0; i < arrUsuarios.length; i++) {
            dados += "<tr>";
            dados += "<td>" + arrUsuarios[i].id + "</td>";
            dados += "<td>" + arrUsuarios[i].nome + "</td>";
            dados += "<td>" + arrUsuarios[i].senha + "</td>";
            dados += "<td> <input type='button' value='Excluir' onclick='uc.aoClicarExcluir(" + arrUsuarios[i].id + ")'></td>";
            dados += "<td> <input type='button' value='Editar' onclick='uc.aoClicarEditar(" +arrUsuarios[i].id + ")'></td>";

            dados += "</tr>";
        }

        document.getElementById("tbUsuarios").innerHTML = dados;
    }

    //Eventos dos Botoes
    this.aoClicarSalvar = function () {
    		var self =  this;
        //Leitura dos dados
    		idUsuario = document.getElementById("txtId").value;
        nomeUsuario = document.getElementById("txtUsuario").value;
        senhaUsuario = document.getElementById("txtSenha").value;
        //Constroi um objeto usuario
        //usu = { nome: nomeUsuario, senha: senhaUsuario };
        usu = "nome="+nomeUsuario+"&senha="+senhaUsuario;
        if (idUsuario=="") {
            //Adiciona no vetor
            this.usuarioService.adicionar(usu, function(){
            		window.alert("Salvo com sucesso!");
            		self.aoClicarListar();
            }, function(){
            		window.alert("Não pode ser salvo!");
            });
        } else {
        		usu+="&id="+idUsuario;
            this.usuarioService.alterar(usu, function (){
	            	window.alert("Salvo com sucesso!");
	        		self.aoClicarListar();
            } , function(){
            		window.alert("Não pode ser salvo!");
            });
        }


        this.limparCampos();
        this.sairModoEdicao();


    }

    this.aoClicarListar = function () {
    		var self =  this;
        usuarios = this.usuarioService.buscarTodos(function (usuarios){
        		//window.alert(usuarios)
        		self.renderizarTabelaUsuarios(usuarios);
        });
       

    }

    this.aoClicarExcluir = function (id) {
    	
    		if (window.confirm("Deseja realmente excluir?")){
	    	
	    		var self =  this;
	        this.usuarioService.excluir(id, function (){
	        		
	        		self.aoClicarListar();
	        		window.alert("Excluído com sucesso!");
	        		
	        });
    		}

    }

    this.aoClicarEditar = function (id) {
        this.entrarModoEdicao();
        this.indiceEdicao = id;

         this.usuarioService.buscarPorId(id, function (usuario){
        	 		document.getElementById("txtId").value = usuario.id;
        	   		document.getElementById("txtUsuario").value = usuario.nome;
        	   		document.getElementById("txtSenha").value = usuario.senha;
        	
        });
     
    }

    this.aoClicarCancelar = function () {
        this.limparCampos();
        this.sairModoEdicao();
    }


    this.limparCampos = function () {

        //Limpa dados da tela
        document.getElementById("txtUsuario").value = "";
        document.getElementById("txtSenha").value = "";

    }


    this.entrarModoEdicao = function () {
        this.modoEdicao = true;
    }

    this.sairModoEdicao = function () {
        this.modoEdicao = false;
    }

}

