function validacao(){

    let nome = document.getElementById("i_nome");
    let email = document.getElementById("i_mail"); 
    let data = document.getElementById("i_data");
    let turma = document.getElementById("i_turma");
    let genero = document.getElementById("i_genero");
    let senha = document.getElementById("i_senha");
    let con_sen = document.getElementById("i_con_senha");

    let sty_1 = "2px solid red";
    let sty_2 = "1px solid rebeccapurple";

    input_style(nome, sty_1, sty_2);
    input_style(email, sty_1, sty_2);
    input_style(data, sty_1, sty_2);
    input_style(senha, sty_1, sty_2);
    input_style(con_sen, sty_1, sty_2);
    
}

function input_style(input, style_1, style_2){

    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;
    }

    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border; 
    }

}