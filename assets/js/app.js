(function(window){
    
    $('.dropdown-toggle').on('click', function( evt ) {
        console.log('oi');
        evt.preventDefault();
        $(this).parent().parent().find('ul').toggleClass('active');
    });

})(window);