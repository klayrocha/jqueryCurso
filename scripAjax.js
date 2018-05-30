$(function(){
    $('button').on('click', function(){
        console.log("Chegou aqui !");
        $('div').load("testeAjax.html");
    });
});