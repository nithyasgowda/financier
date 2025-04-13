// Nav Slider
function navSlider() {
  const header = document.getElementById("header");
  const nav = document.querySelector("nav");
  let check = false;
  document.querySelector(".bar").addEventListener("click", function () {
    if (check === false) {
      this.style.cssText="transition: all 0.5s ease; transform: rotate(90deg); "
      this.classList.add("fa-xmark");
      nav.style.cssText="max-height:100vh; opacity:1"
      check = true;
    } else {
      this.style.cssText="transition: all 0.5s ease; transform: rotate(0deg)"
      this.classList.remove("fa-xmark");
      nav.style.cssText="max-height:0; opacity:0"
      check = false;
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth > 750) {
        nav.style.cssText = "";
      }
    })
  });
}
navSlider();


