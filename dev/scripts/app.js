const button = document.querySelector('#nav-icon3');
const nav = document.querySelector("#nav");

button.onclick = function() {
  	button.classList.toggle('open');
  	 if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

window.addEventListener("resize", function() {
   if (window.innerWidth > 600) {
      nav.style.display = "flex";
      button.classList.remove('open');
   } else {
   	nav.style.display = "none";
   }
});