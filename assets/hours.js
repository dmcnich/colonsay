var currentTime = new Date().getHours();
var pre = "url(images/"
var post = ".jpeg) 50% top / cover no-repeat fixed rebeccapurple"

if (7 <= currentTime && currentTime < 9) {
    document.getElementById("target").style.background = pre+"kiloran"+post
    }
else if (9 <= currentTime && currentTime < 11) {
    document.getElementById("target").style.background = pre+"paps"+post
    }
else if (11 <= currentTime && currentTime < 13) {
    document.getElementById("target").style.background = pre+"aerial"+post
    }
else if (13 <= currentTime && currentTime < 15) {
    document.getElementById("target").style.background = pre+"green"+post
    }
else if (15 <= currentTime && currentTime < 17) {
    document.getElementById("target").style.background = pre+"harbour"+post
    }
else if (17 <= currentTime && currentTime < 19) {
    document.getElementById("target").style.background = pre+"high"+post
    }
else if (19 <= currentTime && currentTime < 21) {
    document.getElementById("target").style.background = pre+"scalasaig"+post
    }
else if (21 <= currentTime && currentTime < 23) {
    document.getElementById("target").style.background = pre+"seil"+post
    }
else if (23 <= currentTime) {
    document.getElementById("target").style.background = pre+"south"+post
    }
else if (1 <= currentTime && currentTime < 3) {
    document.getElementById("target").style.background = pre+"stone"+post
    }
else if (3 <= currentTime && currentTime < 5) {
    document.getElementById("target").style.background = pre+"sunkiss"+post
    }
