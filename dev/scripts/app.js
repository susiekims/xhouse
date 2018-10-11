const button = document.querySelector('#nav-icon3');
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const links = document.getElementsByClassName('nav_link');
const scroll = document.getElementsByClassName('scroll');
const scroll2 = document.getElementsByClassName('scroll2');
const scroll3 = document.getElementsByClassName('scroll3');

const toggleDropdown = () => {
    button.onclick = function() {
          button.classList.toggle('open');
           if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    }
}

const closeDropdown = () => {
    for (let i = 0; i < links.length; i++) {
        if (window.innerWidth < 620) {
            links[i].onclick = function(){
                console.log('click');
                nav.style.display = "none";
                button.classList.remove('open');
            }
        }
    };
}

const setViewportHeight = () => {
    header.style.height = `${window.innerHeight}px`;
    nav.style.height = `${window.innerHeight}px`;
}

const showNav = () => {
    if (window.innerWidth > 625 ) {
        nav.style.display = "flex";
        button.classList.remove('open');
    } else {
           nav.style.display = "none";
    }
}

const events = () => {
    window.onresize = function() {
        setViewportHeight();
        showNav();
    }
    
    window.onscroll = function () {
        button.classList.remove('open');

        if (window.innerWidth < 625 ) {
            nav.style.display = "none";
        }

        let pageBottom = document.body.scrollTop + window.innerHeight;

        for (let i = 0; i < scroll.length; i++) {
            let elem = scroll[i].getBoundingClientRect();
            if (elem.top < (pageBottom * .95)) {
                scroll[i].classList.add('scroll-effect');
            } else {
                scroll[i].classList.remove('scroll-effect');
            }
        }

        for (let i = 0; i < scroll2.length; i++) {
            let elem = scroll2[i].getBoundingClientRect();
            if (elem.top < (pageBottom * .95)) {
                scroll2[i].classList.add('scroll-effect');
            } else {
                scroll2[i].classList.remove('scroll-effect');
            }
        }

        for (let i = 0; i < scroll3.length; i++) {
            let elem = scroll3[i].getBoundingClientRect();
            if (elem.top < (pageBottom * .95)) {
                scroll3[i].classList.add('scroll-effect');
            } else {
                scroll3[i].classList.remove('scroll-effect');
            }
        }
    }
}

const init = () => {
    setViewportHeight();
    events();
    toggleDropdown();
    closeDropdown();
    showNav();
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});

