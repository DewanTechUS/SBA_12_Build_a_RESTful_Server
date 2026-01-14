const video = document.getElementById("bgVideo");

document.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    video.play();
  }
}, { once: true });
