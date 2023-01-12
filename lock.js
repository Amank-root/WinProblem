let percent = document.getElementById("percentage");

setTimeout(() => {
    alert("Press F11 To Fullscreen The Webpage")
}, 4000);

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } 
    else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var fullbody = document.body; // Make the body go full screen.
requestFullScreen(fullbody);

function dash(){
    let main = document.getElementsByClassName("main");
    main.style.bg = "black";
}
setTimeout(dash, 30000)
