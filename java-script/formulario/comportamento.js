function validacao(){
    var autorizacao = false;
    var msg = "";

    //VALIDACAO DO CAMPO NOME
    var nome = document.getElementById("nome").value;
    if(nome.length < 1){
        msg += "\r\n - Campo nome é de preenchimento obrigatório";
    }

    //VALIDACAO DO CAMPO IDADE
    var idade = document.getElementById("idade").value;
    var idadeInc = document.getElementById("idadeIncorreta");

    if(idade < 18 || idade > 120){
        msg += "\r\n - O campo não corresponde a idade exigida.";
        idadeInc.innerHTML = "O campo idade deve ser preenchido com as idades de 18 a 120 anos."; 
    }else{
        idadeInc.innerHTML = "";
    }

    //VALIDACAO DO CAMPO INTERESSES
    var areas = document.getElementsByName("areas[]"); 
    var interMsg = document.getElementById("interMsg");
    var contador = 0;

    for(var i = 0; i < areas.length; i++){
        if(areas[i].checked) {
            msg += "\r\n - Campo nome é de preenchimento obrigatório";
        }
    }

    if(contador < 1){
        msg += "\r\n - É preciso marcar pelo menos um campo da área de interesse";
        interMsg.innerHTML = "Marque pelo menos um campo de interesse.";
    }
    else{
        interMsg.innerHTML = "";
    }

    if(msg == "") autorizacao = true;
    else alert("Verifique os seguintes campos: " + msg);

    return false;
}

function visualizaArea(){
    var visualiza = document.getElementsByName("areas[]"); 
    var msgVisualiza = "";

    for(var i = 0; i < visualiza.length; i++){
        if(visualiza[i].checked){
            msgVisualiza += "\r\n- " + visualiza[i].value;
        }
    }

    if(msgVisualiza == "") msgVisualiza = "Nenhuma área foi selecionada.";
    else msgVisualiza = "Áreas selecionadas: " + msgVisualiza;
    alert(msgVisualiza);
}

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
    var textoAlerta = document.getElementById("alert");
    var msgErro = "As senhas não correspondem";

    if(senha != confirma){
        alert(msgErro);
        textoAlerta.innerHTML = msgErro;
    }else{
        textoAlerta.innerHTML = "";
    }
}