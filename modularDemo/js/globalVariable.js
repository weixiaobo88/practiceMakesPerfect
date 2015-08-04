var moduleC = ( function ($){
    console.log('.. This is from globalVariable.js, current url: ', $(location).attr('href'));
})(jQuery);
