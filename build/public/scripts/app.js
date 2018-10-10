(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var button = document.querySelector('#nav-icon3');
var nav = document.querySelector("#nav");
var header = document.querySelector("#header");
var links = document.getElementsByClassName('nav_link');
var scroll = document.getElementsByClassName('scroll');
var scroll2 = document.getElementsByClassName('scroll2');
var scroll3 = document.getElementsByClassName('scroll3');

var toggleDropdown = function toggleDropdown() {
    button.onclick = function () {
        button.classList.toggle('open');
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    };
};

var closeDropdown = function closeDropdown() {
    for (var i = 0; i < links.length; i++) {
        if (window.innerWidth < 620) {
            links[i].onclick = function () {
                console.log('click');
                nav.style.display = "none";
                button.classList.remove('open');
            };
        }
    };
};

var setViewportHeight = function setViewportHeight() {
    header.style.height = window.innerHeight + "px";
    nav.style.height = window.innerHeight + "px";
};

var showNav = function showNav() {
    if (window.innerWidth > 625) {
        nav.style.display = "flex";
        button.classList.remove('open');
    } else {
        nav.style.display = "none";
    }
};

var events = function events() {
    window.onresize = function () {
        setViewportHeight();
        showNav();
    };

    window.onscroll = function () {
        button.classList.remove('open');

        if (window.innerWidth < 625) {
            nav.style.display = "none";
        }

        for (var i = 0; i < scroll.length; i++) {
            var elem = scroll[i].getBoundingClientRect();
            if (elem.top < window.innerHeight * .9) {
                scroll[i].style.transform = "translateY(0px)";
                scroll[i].style.opacity = "1";
            } else {
                scroll[i].style.transform = "translateY(100px)";
                scroll[i].style.opacity = "0";
            }
        }

        for (var _i = 0; _i < scroll2.length; _i++) {
            var _elem = scroll2[_i].getBoundingClientRect();
            if (_elem.top < window.innerHeight * .8) {
                scroll2[_i].style.transform = "translateY(0px)";
                scroll2[_i].style.opacity = "1";
            } else {
                scroll2[_i].style.transform = "translateY(100px)";
                scroll2[_i].style.opacity = "0";
            }
        }

        for (var _i2 = 0; _i2 < scroll3.length; _i2++) {
            var _elem2 = scroll3[_i2].getBoundingClientRect();
            if (_elem2.top < window.innerHeight * .7) {
                scroll3[_i2].style.transform = "translateY(0px)";
                scroll3[_i2].style.opacity = "1";
            } else {
                scroll3[_i2].style.transform = "translateY(100px)";
                scroll3[_i2].style.opacity = "0";
            }
        }
    };
};

var init = function init() {
    setViewportHeight();
    events();
    toggleDropdown();
    closeDropdown();
    showNav();
};

init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBSSxL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QUFXLEtBQVgsQ0FBaUIsT0FBakIsR0FBMkIsR0FBM0I7QUFDSDtBQUNKO0FBQ0osS0ExQ0Q7QUEyQ0gsQ0FqREQ7O0FBbURBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQU5EOztBQVFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X2xpbmsnKTtcbmNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbCcpO1xuY29uc3Qgc2Nyb2xsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbDInKTtcbmNvbnN0IHNjcm9sbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwzJyk7XG5cbmNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjApIHtcbiAgICAgICAgICAgIGxpbmtzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNvbnN0IHNldFZpZXdwb3J0SGVpZ2h0ID0gKCkgPT4ge1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xuICAgIG5hdi5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xufVxuXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYyNSApIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cblxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRWaWV3cG9ydEhlaWdodCgpO1xuICAgICAgICBzaG93TmF2KCk7XG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjUgKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtID0gc2Nyb2xsW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHdpbmRvdy5pbm5lckhlaWdodCAqIC45KSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMHB4KVwiXG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwyW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHdpbmRvdy5pbm5lckhlaWdodCAqIC44KSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDBweClcIlxuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtID0gc2Nyb2xsM1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChlbGVtLnRvcCA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNykpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwcHgpXCJcbiAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgxMDBweClcIlxuICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgc2V0Vmlld3BvcnRIZWlnaHQoKTtcbiAgICBldmVudHMoKTtcbiAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICBzaG93TmF2KCk7XG59XG5cbmluaXQoKTtcblxuIl19
