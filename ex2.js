function validar(){
    var nome = cadastro.nome.value;
    var cpf = cadastro.nome.value;
    var email = cadastro.nome.value;
    var senha = cadastro.senha.value;
    var confirma = cadastro.confirma.value;

    if(nome==""){
        alert("Nome é campo obrigatório");
        nome.focus();
        return false;
    }
    if(cpf=="")[
        alert("CPF é campo de preenchimento obrigatório");
        cpf.focus();
        return false;
    }
    if(cpf.length != 14){
        alert("CPF invalido!")
        cpf.focus();
        return false;
    }
    if(email==""){
        alert("Camp E-mail é de preenchimento obrigatório!");
        cadastro.senha.focus();
        return false;
    }   
    if(senha.length < 6 || senha.length > 10){
        alert("A senha deve ter no mínimo 6 e no máximo 10 números!")
        cadastro.senha.focus();
        return false;
    }  
    if(isNaN(senha)){
        alert("É ")
    }    


}