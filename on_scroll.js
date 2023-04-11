var prevScrollPosition = window.scrollY;
window.onscroll = function() {
    var currentScrollPosition = window.scrollY;
    if (prevScrollPosition > currentScrollPosition) {
        document.getElementById("topnav").style.top = "0";
        console.log("scroll up");
    }
    else {
        document.getElementById("topnav").style.top = "-150px";
        console.log("scroll down");
    }
    prevScrollPosition = currentScrollPosition;
}