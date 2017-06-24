UsuarioService = function () {
    this.usuarios = [];

    //C REATE
    this.adicionar = function (usu) {
        this.usuarios.push(usu);
    }
    //R ETRIEVE
    this.buscarTodos = function () {
        return this.usuarios;
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