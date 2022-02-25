function show() {
    var popup = document.querySelector(".popup")
    popup.style.visibility = "visible";
    popup.classList.add("fadeIn");
    // document.querySelector(".popup").style.animation = "fade 3s ease-in-out forwards";
}

function hide() {
  document.querySelector(".popup").style.visibility = "hidden";
}
