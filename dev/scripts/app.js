const button = document.querySelector('#nav-icon3');
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const links = document.getElementsByClassName('nav_link');
const scroll = document.getElementsByClassName('scroll');
const scroll2 = document.getElementsByClassName('scroll2');
const scroll3 = document.getElementsByClassName('scroll3');
const random = document.getElementsByClassName('random');

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

    for (let i = 0; i < scroll2.length; i++) {
        let elem = scroll2[i].getBoundingClientRect();
        if (elem.top < (window.innerHeight * .8)) {
            scroll2[i].style.transform = "translateY(0px)"
            scroll2[i].style.opacity = "1"

        } else {
            scroll2[i].style.transform = "translateY(100px)"
            scroll2[i].style.opacity = "0"
        }
    }
    for (let i = 0; i < scroll3.length; i++) {
        let elem = scroll3[i].getBoundingClientRect();
        if (elem.top < (window.innerHeight * .7)) {
            scroll3[i].style.transform = "translateY(0px)"
            scroll3[i].style.opacity = "1"

        } else {
            scroll3[i].style.transform = "translateY(100px)"
            scroll3[i].style.opacity = "0"
        }
    }
   
}


// for (let i = 0; i < random.length; i ++) {
//     // let num = random[i].getBoundingClientRect();
//     let count = parseInt(random[i].innerHTML)
//     // console.log(count);
//     for (let i = 0; i < count; i++) {
//         setInterval( function() {
//             random[i].innerHTML = i;
//             // console.log(i);
//         }, 1000);
//     }
// }

window.onresize(); // called to initially set the height

window.addEventListener("resize", function() {
   if (window.innerWidth > 625 ) {
      nav.style.display = "flex";
      button.classList.remove('open');
   } else {
   	nav.style.display = "none";
   }
});
