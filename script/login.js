function validar(strLogin,str_Senha){
    if(strLogin != "eren"){
        alert('Nome incorreto');
        document.form1.strLogin.focus();
        return false;
    }else if(str_Senha != "titan"){
        alert('Senha incorreta');
        document.form1.str_Senha.focus();
        return false;
    }else{
        alert('Login feito com sucesso');
        document.form1.action = "tela_geral.html"
        document.form1.submit();
    }
}

