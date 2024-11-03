function time() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const timeString = hours + ":" + minutes + ":" + second;
  document.getElementById("clock").innerHTML = timeString;
}
setInterval(time, 1000);
