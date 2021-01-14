


for(var i=0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick(){

  this.style.color = "blue";
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
}
