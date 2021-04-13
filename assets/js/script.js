$(document).on('click', '#esconde', function(){ 
    $('#navegacao, #secaoPro, .botaoEsconde').css("display", "none"); 
    $('.botaoAparece').css("display", "block");     
});

$(document).on('click', '#aparece', function(){ 
    $('#navegacao, #secaoPro, .botaoEsconde').css("display", "block"); 
    $('.botaoAparece').css("display", "none"); 
    $('.pro-secao').css("display", "flex");       
});