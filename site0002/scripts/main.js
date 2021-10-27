
//Byte mellan artiklarna. alla ligger i HTML och denna funktion ser till att endast den valda artikeln syns.
function contentSwitch(y) {
  var content = document.getElementsByClassName('dis');
  for (var i = 0; i < content.length; i++) {
    if (content[i].classList.contains(y)){
    content[i].style.display = "block";

    }
    else {
      content[i].style.display = "none";

    }
  }
}
