window.onload = function(){
  var theDelay = 1.5;
  var timer = setTimeout("showText()",theDelay*1000)
}
function showText(){
  document.getElementById("delayedText").style.visibility = "visible";
}
