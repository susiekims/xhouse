const button = document.querySelector('#nav-icon3');
const nav = document.querySelector("#nav");
const links = document.getElementsByClassName('nav_link');
console.log(links);

button.onclick = function() {
  	button.classList.toggle('open');
  	 if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

for (let i = 0; i < links.length; i++) {
    if (window.innerWidth < 620) {
        links[i].onclick = function(){
            console.log('click');
            nav.style.display = "none";
            button.classList.remove('open');
        }
    }
};

window.onresize = function() {
    document.body.height = window.innerHeight;
}

window.onresize(); // called to initially set the height

window.addEventListener("resize", function() {
   if (window.innerWidth > 620 ) {
      nav.style.display = "flex";
      button.classList.remove('open');
   } else {
   	nav.style.display = "none";
   }
});