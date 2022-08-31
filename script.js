(function($){
    $(function(){
        $(".jq--scroll-mytraveling").click(function(){
           $("html, body").animate({scrollTop: $(".jq--mytraveling").offset().top}, 1000);
        });
        
   
        $(".jq--scroll-mytours").click(function(){
            $("html, body").animate({scrollTop: $(".jq--mytours").offset().top}, 1000);
         });
    }); 
})(jQuery);