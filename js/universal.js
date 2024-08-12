function setup(){ // onload
    console.log('setting up universal')
    window.scrollTo(0, 0);
    setTimeout(function(){
        $(".transition").removeClass("is-active");
    }, 500);
}

function startPageTransition(target){
    $(".transition").addClass("is-active");
    setTimeout(function(){
        window.location.href = target;
    }, 500);
}

$(window).scroll(function() {
    $('video').each(function() {
        if ($(this).visible(true)) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
});