(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var button = document.querySelector('#nav-icon3');
var nav = document.querySelector("#nav");
var header = document.getElementsByTagName('header');
var links = document.getElementsByClassName('nav_link');

button.onclick = function () {
    button.classList.toggle('open');
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
};

for (var i = 0; i < links.length; i++) {
    if (window.innerWidth < 620) {
        links[i].onclick = function () {
            console.log('click');
            nav.style.display = "none";
            button.classList.remove('open');
        };
    }
};

window.onresize = function () {
    header.style.height = window.innerHeight + 'px';
    nav.style.height = window.innerHeight + 'px';
};

window.onresize(); // called to initially set the height

window.addEventListener("resize", function () {
    if (window.innerWidth > 620) {
        nav.style.display = "flex";
        button.classList.remove('open');
    } else {
        nav.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLG9CQUFULENBQThCLFFBQTlCLENBQWY7QUFDQSxJQUFNLFFBQVEsU0FBUyxzQkFBVCxDQUFnQyxVQUFoQyxDQUFkOztBQUVBLE9BQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3pCLFdBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFFBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUM5QixZQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNIO0FBQ0osQ0FQRDs7QUFTQSxLQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNuQyxRQUFJLE9BQU8sVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QixjQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLG1CQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDSCxTQUpEO0FBS0g7QUFDSjs7QUFFRCxPQUFPLFFBQVAsR0FBa0IsWUFBVztBQUN6QixXQUFPLEtBQVAsQ0FBYSxNQUFiLEdBQXlCLE9BQU8sV0FBaEM7QUFDQSxRQUFJLEtBQUosQ0FBVSxNQUFWLEdBQXNCLE9BQU8sV0FBN0I7QUFDSCxDQUhEOztBQUtBLE9BQU8sUUFBUCxHLENBQW1COztBQUVuQixPQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDMUMsUUFBSSxPQUFPLFVBQVAsR0FBb0IsR0FBeEIsRUFBOEI7QUFDM0IsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNGLEtBSEQsTUFHTztBQUNOLFlBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDQTtBQUNILENBUEQ7O0FBU0EsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVyxDQUV4RCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJyk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9saW5rJyk7XG5cbmJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIFx0YnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgXHQgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxufVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjIwKSB7XG4gICAgICAgIGxpbmtzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xuICAgIG5hdi5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xufVxuXG53aW5kb3cub25yZXNpemUoKTsgLy8gY2FsbGVkIHRvIGluaXRpYWxseSBzZXQgdGhlIGhlaWdodFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYyMCApIHtcbiAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgfSBlbHNlIHtcbiAgIFx0bmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHsgXG4gICAgXG59KTsiXX0=
