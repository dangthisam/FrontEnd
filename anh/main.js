const panel = document.querySelectorAll(".panel");
console.log(panel);
panel.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    removeActive();

    item.classList.add("active");
  });
});
function removeActive() {
  panel.forEach((item) => {
    item.classList.remove("active");
  });
}
