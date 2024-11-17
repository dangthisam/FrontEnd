// lay cac phan tu can theo tac
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");
//khoi tao cho cac gia tri ban dau cua buoc dang hoat dong
let currentActive = 1;
//lang nghe su kien cho nut next
next.addEventListener("click", () => {
  changeStep(1); //tang buoc len 1
});

prev.addEventListener("click", () => {
  changeStep(-1); //lui buoc len 1
});

function changeStep(step) {
  currentActive += step;
  update(); //cap nhat lai giao dien
}

function update() {
  //duyet quan cac phan tu
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}
