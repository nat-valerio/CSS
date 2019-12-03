function mostraSenha(id, idBtn){

    var elemento = document.getElementById(id); //quero mudar
    var botao = document.getElementById(idBtn);
    
    if(elemento.type == "text"){
        elemento.type = "password";
        botao.innerHTML = "@";
    }else{
        elemento.type = "text";
        botao.innerHTML = "#";
    }
}

function comparaSenha(){
    var senha = document.getElementById("senha").value;
    var confirma = document.getElementById("confirma").value;

    if(senha != confirma){
        alert("As senhas não são iguais. Digite novamente.");
    }
}