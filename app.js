const btn = document.querySelector("#btn");
const monthly = document.querySelectorAll(".monthly");
const yearly = document.querySelectorAll(".yearly");

btn.addEventListener("click", () => {
  for (const e of monthly) {
    e.classList.toggle("unactive");
    for (const a of yearly) {
      a.classList.toggle("unactive");
    }
  }
});
