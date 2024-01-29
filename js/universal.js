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