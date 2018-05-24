// EXEMPLO 01
//$( document ).ready(function(){
//    alert("Iniciou no ready");
//});

// EXEMPLO 02
//$(function(){
//  alert("Iniciou no ready nova forma");
//});

// EXEMPLO 03
//$( document ).ready(funcaoInicio);
//$(funcaoInicio());
//$(funcaoInicio);
//function funcaoInicio(){
//    alert("Iniciou no ready chamando funcao");
//}

// EXEMPLO 04
//var $K =  jQuery.noConflict();
//$K(funcaoInicio);
//$K(alert('Com o novo nome'));

// EXEMPLO 05
//jQuery(document).ready(function(){
//    alert(' Funcionando Nativamente...');
//});

// EXEMPLO 06
$(function(){
    //$("button"); pelo nome da tag
    alert($("#botao1")); // pelo id
    alert($(".botao")); // pelo classe
    alert($("li.botao")); // apenas a li que tem a classe botão
    alert($(".lista2 li.botao")); // apenas a li que tem a classe botão
})