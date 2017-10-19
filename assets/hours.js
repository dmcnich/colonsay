var currentTime = new Date().getHours();
var pre = "url(https://dmcnich.github.io/colonsay/images/"
var post = ".jpeg) 50% top / auto 100vh no-repeat fixed rebeccapurple"


else if (7 <= currentTime && currentTime < 11) {
    document.getElementById("target").style.background = pre+"logs"+post
    }

else if (11 <= currentTime && currentTime < 15) {
    document.getElementById("target").style.background = pre+"sawmill"+post
    }

else if (15 <= currentTime && currentTime < 19) {
    document.getElementById("target").style.background = pre+"kiloran"+post
    }

else if (19 <= currentTime && currentTime < 23) {
    document.getElementById("target").style.background = pre+"sunset"+post
    }

else if (currentTime < 3 || 23 <= currentTime ) {
    document.getElementById("target").style.background = pre+"kilorain"+post
    }

else if (3 <= currentTime && currentTime < 7) {
    document.getElementById("target").style.background = pre+"garden"+post
    }
