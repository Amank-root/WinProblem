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

for (let i = 0; i < 101; i++) {
    setTimeout(function () {
        percent.innerHTML = i + "%";
    }, i * 8000);
}
let percentvala
setInterval(() => {

    percentvala = Number(percent.innerText.slice(0, -1));
    complete = document.getElementById("completed");
    textkind = document.getElementById("textkind");
    msgremove = document.getElementById("mssgremove");
    extratext = document.getElementById("extratext");
    if (percentvala === 100) {
        percent.innerText = "Restarting.";
        complete.style.display = "none";
        textkind.style.display = "none";
        msgremove.style.display = "none";
        extratext.style.display = "none";
    }
    else {
        one = 1
    }

    setInterval(() => {
        if (localStorage.getItem('passcode') === 'NaN') {
            localStorage.setItem('passcode', 100)
        }
        else {
            localStorage.setItem('passcode', percentvala)

        }
    }, 10000);
}, 8000);

// In Update Let Page Start From Where It Ended.