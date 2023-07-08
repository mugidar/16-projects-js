const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("mouseover", (e) => {
  const x = (e.pageX - buttonEl.offsetLeft)
  const y = (e.pageY - buttonEl.offsetTop)
  console.log(x)
  console.log(y)
  buttonEl.style.setProperty("--xAxis", `${x}px`);
  buttonEl.style.setProperty("--yAxis", `${y}px`);
});
