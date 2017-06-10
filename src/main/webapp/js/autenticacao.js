//Classe
Autenticacao = function(){}

//Método
Autenticacao.prototype.validarCampos= function (){

    elementoUsuario = document.getElementById("txtUsuario");
    textoDigitadoUsuario = elementoUsuario.value;
    
    elementoSenha =  document.getElementById("txtSenha");
    textoDigitadoSenha = elementoSenha.value;
    
    if (textoDigitadoUsuario=="" || textoDigitadoSenha=="" ){
        window.alert("#Os campos usuário e senha devem ser digitados!#");
        return false;
    } else{
    
        return true;
    }
}
//Instanciando objeto
aut  = new Autenticacao();