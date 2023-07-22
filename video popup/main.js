const showEl = document.querySelector("#show");
const popupEl = document.querySelector(".popup");

showEl.addEventListener("click", () => {
popupEl.classList.remove("hidden");
  const videoEl = popupEl.querySelector("#video");
  const closeEl = popupEl.querySelector("#close");
  videoEl.play();

  closeEl.addEventListener("click", () => {
    videoEl.pause();
    popupEl.classList.add("hidden");
  });
});
