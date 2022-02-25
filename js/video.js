function show(video) {
  console.log("video:", video.id)
  var popup = document.getElementById(video.id)
  popup.style.visibility = "visible";
  popup.classList.add("fadeIn");
}

function hide(video) {
  var popup = document.getElementById(video.id)
  popup.style.visibility = "hidden";
  popup.classList.remove("fadeIn");
}
