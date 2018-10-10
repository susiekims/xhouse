const button = document.querySelector('#nav-icon3');
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const links = document.getElementsByClassName('nav_link');
const scroll = document.getElementsByClassName('scroll');

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
    header.style.height = `${window.innerHeight}px`;
    nav.style.height = `${window.innerHeight}px`;
    // console.log(window.innerHeight);
    // console.log(hxouse.offsetTop);
}

window.onscroll = function () {
    for (let i = 0; i < scroll.length; i++) {
        let elem = scroll[i].getBoundingClientRect();
        if (elem.top < (window.innerHeight * .9)) {
            scroll[i].style.transform = "translateY(0px)"
            scroll[i].style.opacity = "1"
        } else {
            scroll[i].style.transform = "translateY(100px)"
            scroll[i].style.opacity = "0"
        }
    }
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
