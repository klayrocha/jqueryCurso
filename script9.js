$(function(){
    $('.botao').on('click', function(){
        //$('.div').hide('slow');
        //$('.div').toggle('slow');
        //$('.div').toggle();
        //$('.div').fadeOut();
        //$('.div').fadeIn();
        //$('.div').fadeTo('slow',0.5);
        //$('.div').fadeToggle('slow');
        //$('.div').slideUp('slow');
        //$('.div').slideDown('slow');
        $('.div').slideToggle('slow');
    });

    $('.hellobar').on('click', function(){
        $(this).slideUp();
    });

});