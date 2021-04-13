
//menu responsivo

$(document).on('click', '#esconde', function(){ 
    $('#navegacao, #secaoPro, .botaoEsconde').css("display", "none"); 
    $('.botaoAparece').css("display", "block");     
});

$(document).on('click', '#aparece', function(){ 
    $('#navegacao, #secaoPro, .botaoEsconde').css("display", "block"); 
    $('.botaoAparece').css("display", "none"); 
    $('.pro-secao').css("display", "flex");       
});



//muda tema

//vai para tema escuro
$(document).on('click', '#lua-acordada', function(){ 
    $('#lua-acordada').css("display", "none"); 
    $('#lua-dormindo').css("display", "block");


    $('#main, .pro-secao, .barra-progresso').css("background", "var(--linear-bg-dark)");
    
});



//volta ao tema colorido
$(document).on('click', '#lua-dormindo', function(){ 
    $('#lua-acordada').css("display", "block"); 
    $('#lua-dormindo').css("display", "none");

    $('#main, .pro-secao, .barra-progresso').css("background", "var(--linear-colorido)");
   
});



