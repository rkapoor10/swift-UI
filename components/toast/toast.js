const btns = document.querySelectorAll(".btns");
const closeIcon = document.querySelectorAll(".close-icon");
const baseline = document.querySelector(".baseline");
const leading = document.querySelector(".leading");
const stacked = document.querySelector(".stacked");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Baseline") {
      baseline.style.display = "flex";
    } else if (btn.innerText === "Leading") {
      console.log("clicked");
      leading.style.display = "flex";
    } else if (btn.innerText === "Stacked") {
      console.log("clicked");
      stacked.style.display = "flex";
    }
  });
});

closeIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    leading.style.display = "none";
    baseline.style.display = "none";
    stacked.style.display = "none";
  });
});
