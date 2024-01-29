// CHANNELS
//***************************************************************************

let channelData = [
    ['./img/project/drift/thumb.jpg', "drift"],
    ['./img/project/pendulum/thumb.jpg', "pendulum"],
    ['./img/project/clock/thumb.jpg', "clock"],
    ['./img/project/chair/thumb.jpg', "chair"],
    ['./img/project/mask/thumb.jpg', "mask"],
    ['./img/project/music-video/thumb.jpg', "music-video"],
    ['./img/project/tactical-type/thumb-w.jpg', "projects"],
    ['./img/project/honest-type/thumb.jpg', "honest-type"],
    ['./img/project/pecan-sans/thumb.jpg', "pecan-sans"],
    ['./img/project/adobe-home/thumb.jpg', "adobe-home"],
    ['./img/project/birth-certificate/thumb.jpg', "projects"],
    ['./img/project/infinite/thumb.jpg', "infinite"]
]

//***************************************************************************


function index_setup(){ // onload
    console.log('onloading')
    window.scrollTo(0, 0);
    setup();

    let maxScrollHeight = window.innerHeight + indexScrollLength * channelData.length
    $("#scroll-container").css("height", maxScrollHeight);
    $("#name-container").css("transform", "translateY(0)");
    $("#channels").css("transform", "translateY(95vh)");
    $("#channels").css("transition", "transform .6s ease-in-out 220ms");
    
    preloadChannels();
}





window.addEventListener("resize", () => {
    $(".nameSVG").css("transition", "none");
    $("#name-container").css("transition", "none");
});

document.addEventListener("scroll", () => {
    setCSS();
});


let scrollState = 0;
let treshold = 2;
function setCSS() {
    let scroll = window.scrollY;
    if (scroll > treshold &&  scrollState == 0){
        $(".nameSVG").css("transition", "transform .7s ease-in 50ms, margin .6s ease-in-out .6s");
        $("#name-container").css("transition", "transform 1s cubic-bezier(.77,0,.18,1) 80ms");
        scrollState = 1;
        $("#name-container").css("transform", "translateY(45vh)");
        $("#name1").css("transform", "translateY(83%)");
        $("#name2").css("transform", "translateY(105%)");
        // $("#tilde").css("transform", "translateY(135%)");
        $("#iOver").css("transform", "translateX(234.3%) translateY(642%)");


        $("#idot").css("top", "2.8vw");
        $("#channels").css("transform", "translateY(0)");
        $("#menu-container-low").css("transform", "translateY(20vh)");
        $("#menu-container-high").css("transform", "translateY(0)");
        $("#intro").css("transition", "opacity .5s ease-out");
        $("#intro").css("opacity", "0");
        // $("#name-container").css("bottom", 0);
    } else if (scroll <= treshold &&  scrollState == 1){
        $(".nameSVG").css("transition", "margin .5s ease-in 0s, transform .8s ease-out .3s");
        $("#name-container").css("transition", "transform 1s cubic-bezier(.77,0,.18,1) .3s");
        scrollState = 0;
        $("#name-container").css("transform", "translateY(0vh)");
        $(".nameSVG").css("transform", "translateY(52%)");
        $("#iOver").css("transform", "translateX(234.3%) translateY(242%)");
        // $("#tilde").css("fill", "var(--diego-blue)");


        $("#idot").css("top", "7.6vw");
        $("#channels").css("transform", "translateY(95vh)");
        $("#menu-container-low").css("transform", "translateY(0)");
        $("#menu-container-high").css("transform", "translateY(-15vh)");
        $("#intro").css("transition", "opacity .5s ease-out .7s");
        $("#intro").css("opacity", "1");
    } 
}

let lastChannel = 2;
let mode_one = true;
let indexScrollLength = 100;


function preloadChannels() {
    $("#channel2").addClass("hidden");
    
    let newURL = "url('"+channelData[0][0]+"')";
    $("#channel1").css("background-image", newURL);
    newURL = "url('"+channelData[1][0]+"')";
    $("#channel2").css("background-image", newURL);

    autoChange();
}

function changeChannel() {
    newChannel = lastChannel + 1;
    if (newChannel > channelData.length-2) {
        newChannel = -1;
    }
    lastChannel = newChannel;
    let newURL = "url('"+channelData[newChannel + 1][0]+"')";

    console.log(mode_one);
    mode_one = !mode_one
    if (mode_one == true) {
        $("#channel1").removeClass("hidden");
        $("#channel2").addClass("hidden");
        eek = setTimeout(function() {
            $("#channel2").css("background-image", newURL);
        }, 900)    
    } else {
        $("#channel1").addClass("hidden");
        $("#channel2").removeClass("hidden");
        eek = setTimeout(function() {
            $("#channel1").css("background-image", newURL);
        }, 900)    
    }
}

function autoChange() {
    changeChannel()
    timeoutID = setTimeout(autoChange, 1000)    
}

function goToChannel(){
    let currURL = window.location.href; //http://127.0.0.1:5500/
    let lastTen = currURL.substring(currURL.length - 10);
    if (lastTen == "index.html"){
        currURL = currURL.substring(0,currURL.length - 10);
    }
    if (currURL.substring(currURL.length - 1) != "/"){
        currURL = currURL + "/"
    }
    chan_idx = lastChannel;
    if (chan_idx < 0) {
        chan_idx = channelData.length -1;
    }
    
    let redirectURL = currURL + channelData[chan_idx][1] + ".html"
    startPageTransition(redirectURL);
}

