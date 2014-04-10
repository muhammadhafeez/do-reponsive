document.addEventListener('DOMContentLoaded', onLoad);
function onLoad(){
    var button = document.getElementById('doResponsive');
    button.addEventListener("click", function(){
        event.preventDefault()
        var url = document.getElementById('url');
        if(url != ''){
            var iframes = document.querySelectorAll('iframe');
            for (var i = 0; i < iframes.length; i++) {
                iframes[i].src = url.value;
            } 
        }
    });
    var reloadButton = document.getElementById('doReload');
    reloadButton.addEventListener("click", function(){
        event.preventDefault()
        var url = document.getElementById('url');
        if(url != ''){
            var iframes = document.querySelectorAll('iframe');
            for (var i = 0; i < iframes.length; i++) {
                iframes[i].src = url.value;
            } 
        }
        
    });

    var clicked = false, clickY;
    document.addEventListener("mousemove", function(e){
        clicked && updateScrollPos(e);
    });
    document.addEventListener("mousedown", function(e){
        clicked = true;
        clickY = e.pageY;
    });
    document.addEventListener("mouseup", function(e){
        clicked = false;
        $('html').css('cursor', 'auto');
    });

    var updateScrollPos = function(e){
        $('html').css('cursor', 'pointer');
        $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
    }
// $(".scroll").niceScroll(".frame",{cursoropacitymax:0.7,boxzoom:false,touchbehavior:true});  // This is an IFrame (iPad compatible)
}
function closeDevice(){
    jQuery(this).closest(".deviceWrap").remove();
};

document.addEventListener('DOMContentLoaded', function(){
    var closeBtn = document.querySelectorAll('.close');
    for (var i = 0; i < closeBtn.length; i++) {
        closeBtn[i].addEventListener('click', closeDevice);
    }
});
