const button = document.querySelector('#nav-icon3');
// const nav = document.querySelector("#nav");
const nav = document.getElementsByTagName('nav')[0];
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
        if (window.innerWidth < 625) {
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
        document.getElementById('panel-title').setAttribute('data', "./public/assets/images/panel-discussions.svg");
    } else {
        nav.style.display = "none";
        document.getElementById('panel-title').setAttribute('data', "./public/assets/images/panel-discussions2.svg");
        document.getElementById('footer').innerHTML = `<h4 id="footer">open hxouse <br> powered by google pixel 3<br>all rights reserved 2018.</h4>`
    }
}

const setColumnHeight = () => {
    const v = document.getElementById('column').clientHeight;
    document.getElementsByClassName('gg')[0].style.height = `${v}px`;
}

const events = () => {
    window.onresize = function() {
        // setViewportHeight();
        showNav();
        setColumnHeight();
    }
    
    window.onscroll = function () {
        button.classList.remove('open');

        if (window.innerWidth < 625 ) {
            nav.style.display = "none";
        }
        // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //     return;
        // } else {
            let pageBottom = document.body.scrollTop + window.innerHeight;
            for (let i = 0; i < scroll.length; i++) {
                let elem = scroll[i].getBoundingClientRect();
                if (elem.top < (pageBottom * .95)) {
                    scroll[i].style.opacity = 1;
                    scroll[i].style.transform = 'translateY(0px)';
                } else {
                    scroll[i].style.opacity = 0;
                    scroll[i].style.transform = 'translateY(50px)';

                }
            }

            for (let i = 0; i < scroll2.length; i++) {
                let elem = scroll2[i].getBoundingClientRect();
                if (elem.top < (pageBottom * .9)) {
                    scroll2[i].style.opacity = 1;
                    scroll2[i].style.transform = 'translateY(0px)';
                } else {
                    scroll2[i].style.opacity = 0;
                    scroll2[i].style.transform = 'translateY(50px)';
                }
            }

            for (let i = 0; i < scroll3.length; i++) {
                let elem = scroll3[i].getBoundingClientRect();
                if (elem.top < (pageBottom * .85)) {
                    scroll3[i].style.opacity = 1;
                    scroll3[i].style.transform = 'translateY(0px)';
                } else {
                    scroll3[i].style.opacity = 0;
                    scroll3[i].style.transform = 'translateY(50px)';
                }
            }
        }
    // }
}

const init = () => {
    // setViewportHeight();
    events();
    toggleDropdown();
    closeDropdown();
    showNav();
    setColumnHeight();
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});

