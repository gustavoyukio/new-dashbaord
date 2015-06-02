(function(window){
    
    $('.dropdown-toggle').on('click', function( evt ) {
        console.log('oi');
        evt.preventDefault();
        $(this).parent().parent().find('ul').toggleClass('active');
    });

    var abacate;
    console.log('oi');

    $('a').each(function(){

        abacate = $(this).attr('href');

        if ( "?".indexOf( abacate ) ) {
            abacate = abacate + "?local=stg";
        }else {
            abacate = abacate + "&local=stg";
        }

        console.log(abacate);

        $(this).attr('href',abacate);
    });    

})(window);