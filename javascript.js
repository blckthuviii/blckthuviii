function testbutton() {
    var showText = document.getElementById('testbutton-content');
    if (showText.style.display == "block") {
        showText.style.display = "none"
    } else {
        showText.style.display = "block"
    }
}