function testbutton() {
    var showText = document.getElementById('testbutton-content');
    if (showText.style.display == "block") {
        showText.style.display = "none"
    } else {
        showText.style.display = "block"
    }
}

function modes() {
    var mode = document.body;
    mode.classList.toggle("dark-mode")
    var modeheader = document.getElementById('header');
    modeheader.classList.toggle("dark-mode-header")
}

function testingsite() {
    window.open('testingsite.html', '_self')
}