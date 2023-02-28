const fullScreen = document.querySelector(".navbar .inner a:nth-child(3) > i");
//전체 화면 처리
fullScreen.addEventListener("click", function () {
  if (fullScreen.classList.contains("fa-up-right-and-down-left-from-center")) {
    document.documentElement.requestFullscreen();
    fullScreen.classList.remove("fa-up-right-and-down-left-from-center");
    fullScreen.classList.add("fa-down-left-and-up-right-to-center");
  } else {
    fullScreen.classList.add("fa-up-right-and-down-left-from-center");
    fullScreen.classList.remove("fa-down-left-and-up-right-to-center");
    document.exitFullscreen();
  }
});
