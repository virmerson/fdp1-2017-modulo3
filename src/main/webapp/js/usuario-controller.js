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
            dados += "<td> <input type='button' value='Excluir' onclick='uc.aoClicarExcluir(" + i + ")'></td>";
            dados += "<td> <input type='button' value='Editar' onclick='uc.aoClicarEditar(" + i + ")'></td>";

            dados += "</tr>";
        }

        document.getElementById("tbUsuarios").innerHTML = dados;
    }

    //Eventos dos Botoes
    this.aoClicarSalvar = function () {

        //Leitura dos dados
        nomeUsuario = document.getElementById("txtUsuario").value;
        senhaUsuario = document.getElementById("txtSenha").value;
        //Constroi um objeto usuario
        usu = { nome: nomeUsuario, senha: senhaUsuario };

        if (this.modoEdicao == false) {
            //Adiciona no vetor
            this.usuarioService.adicionar(usu);
        } else {
            this.usuarioService.alterar(this.indiceEdicao, usu);
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

    this.aoClicarExcluir = function (indice) {
        this.usuarioService.excluir(indice);

    }

    this.aoClicarEditar = function (indice) {
        this.entrarModoEdicao();
        this.indiceEdicao = indice;

        usuario = this.usuarioService.buscarPorIndice(indice);
        document.getElementById("txtUsuario").value = usuario.nome;
        document.getElementById("txtSenha").value = usuario.senha;
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