const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", (event) => {
  if (/^[a-zA-Z]$/.test(event.key)) {
    if (document.activeElement === textarea) {
      textarea.value += event.key;
    } else {
      textarea.value += event.key;
    }
  }
});
