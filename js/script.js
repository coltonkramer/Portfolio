function moveAcross(element){
    var elStyle = window.getComputedStyle(element);
    var TopValue = elStyle.getPropertyValue("top").replace("px","");
    element.style.top = Number(topValue) + 20 + "px";
}

var title = document.getElementsByClassName("title")
moveAcross(title);

