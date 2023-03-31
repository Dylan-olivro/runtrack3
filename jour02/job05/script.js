window.onload = () => {
  window.addEventListener("scroll", () => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let width = document.documentElement.clientWidth;
    let bar = (position / height) * width;

    document.getElementById("bar").style.width = bar + "px";
  });
};
