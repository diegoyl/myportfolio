// function preloadChannels() {
//     for (i=0; i < channelData.length; i++){
//         var img=new Image();
//         let url = "./img/" + channelData[i][0]
//         img.src=url;
//     }
// }

window.addEventListener("resize", () => {
    setCSS();
});

window.addEventListener("scroll", () => {
    setCSS();
});


let scrollState = 0;
let lastState = 0;
function setCSS() {
    // console.log($(window).scrollTop() + $(window).height()+" | "+$(document).height())
    if($(window).scrollTop() + $(window).height() > $(document).height()-3) {
        scrollState = 1;
        if (scrollState != lastState){
            $("#name1").css("transform", "translateY(16%)");
            $("#name2").css("transform", "translateY(16%)");
            lastState = 1;
        }
    } else {
        scrollState = 0;
        if (scrollState != lastState){
            $("#name1").css("transform", "translateY(88%)");
            $("#name2").css("transform", "translateY(105%)");
            lastState = 0;
        }
    }
}