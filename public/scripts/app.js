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
};

var showNav = function showNav() {
    if (window.innerWidth > 625) {
        nav.style.display = "flex";
        button.classList.remove('open');
        document.getElementById('panel-title').setAttribute('data', "./public/assets/images/panel-discussions.svg");
    } else {
        nav.style.display = "none";
        document.getElementById('panel-title').setAttribute('data', "./public/assets/images/panel-discussions2.svg");
    }
};

var setColumnHeight = function setColumnHeight() {
    var v = document.getElementById('column').clientHeight;
    console.log(v);
    document.getElementsByClassName('gg')[0].style.height = v + "px";
};

var events = function events() {
    window.onresize = function () {
        setViewportHeight();
        showNav();
        setColumnHeight();
    };

    window.onscroll = function () {
        button.classList.remove('open');

        if (window.innerWidth < 625) {
            nav.style.display = "none";
        }

        var pageBottom = document.body.scrollTop + window.innerHeight;

        for (var i = 0; i < scroll.length; i++) {
            var elem = scroll[i].getBoundingClientRect();
            if (elem.top < pageBottom * .95) {
                scroll[i].style.opacity = 1;
                scroll[i].style.transform = 'translateY(0px)';
            } else {
                scroll[i].style.opacity = 0;
                scroll[i].style.transform = 'translateY(50px)';
            }
        }

        for (var _i = 0; _i < scroll2.length; _i++) {
            var _elem = scroll2[_i].getBoundingClientRect();
            if (_elem.top < pageBottom * .9) {
                scroll2[_i].style.opacity = 1;
                scroll2[_i].style.transform = 'translateY(0px)';
            } else {
                scroll2[_i].style.opacity = 0;
                scroll2[_i].style.transform = 'translateY(50px)';
            }
        }

        for (var _i2 = 0; _i2 < scroll3.length; _i2++) {
            var _elem2 = scroll3[_i2].getBoundingClientRect();
            if (_elem2.top < pageBottom * .85) {
                scroll3[_i2].style.opacity = 1;
                scroll3[_i2].style.transform = 'translateY(0px)';
            } else {
                scroll3[_i2].style.opacity = 0;
                scroll3[_i2].style.transform = 'translateY(50px)';
            }
        }

        // for (let i = 0; i < scroll.length; i++) {
        //     let elem = scroll[i].getBoundingClientRect();
        //     if (elem.top < (pageBottom * .95)) {
        //         scroll[i].classList.add('scroll-effect');
        //     } else {
        //         scroll[i].classList.remove('scroll-effect');
        //     }
        // }

        // for (let i = 0; i < scroll2.length; i++) {
        //     let elem = scroll2[i].getBoundingClientRect();
        //     if (elem.top < (pageBottom * .95)) {
        //         scroll2[i].classList.add('scroll-effect');
        //     } else {
        //         scroll2[i].classList.remove('scroll-effect');
        //     }
        // }

        // for (let i = 0; i < scroll3.length; i++) {
        //     let elem = scroll3[i].getBoundingClientRect();
        //     if (elem.top < (pageBottom * .95)) {
        //         scroll3[i].classList.add('scroll-effect');
        //     } else {
        //         scroll3[i].classList.remove('scroll-effect');
        //     }
        // }
    };
};

var init = function init() {
    setViewportHeight();
    events();
    toggleDropdown();
    closeDropdown();
    showNav();
    setColumnHeight();
};

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBSSxL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QWdCLE1BQUksUUFBUSxNQUE1QixFQUFvQyxLQUFwQyxFQUF5QztBQUNyQyxnQkFBSSxTQUFPLFFBQVEsR0FBUixFQUFXLHFCQUFYLEVBQVg7QUFDQSxnQkFBSSxPQUFLLEdBQUwsR0FBWSxhQUFhLEdBQTdCLEVBQW1DO0FBQy9CLHdCQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLENBQTNCO0FBQ0Esd0JBQVEsR0FBUixFQUFXLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsd0JBQVEsR0FBUixFQUFXLEtBQVgsQ0FBaUIsT0FBakIsR0FBMkIsQ0FBM0I7QUFDQSx3QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixTQUFqQixHQUE2QixrQkFBN0I7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FyRUQ7QUFzRUgsQ0E3RUQ7O0FBK0VBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBUEQ7O0FBU0EsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBUyxLQUFULEVBQWdCO0FBQzFEO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtaWNvbjMnKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9saW5rJyk7XG5jb25zdCBzY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwnKTtcbmNvbnN0IHNjcm9sbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwyJyk7XG5jb25zdCBzY3JvbGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsMycpO1xuXG5jb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjIwKSB7XG4gICAgICAgICAgICBsaW5rc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5jb25zdCBzZXRWaWV3cG9ydEhlaWdodCA9ICgpID0+IHtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YDtcbn1cblxuY29uc3Qgc2hvd05hdiA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2MjUgKSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lbC10aXRsZScpLnNldEF0dHJpYnV0ZSgnZGF0YScsIFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wYW5lbC1kaXNjdXNzaW9ucy5zdmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmVsLXRpdGxlJykuc2V0QXR0cmlidXRlKCdkYXRhJywgXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhbmVsLWRpc2N1c3Npb25zMi5zdmdcIik7XG4gICAgfVxufVxuXG5jb25zdCBzZXRDb2x1bW5IZWlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2x1bW4nKS5jbGllbnRIZWlnaHQ7XG4gICAgY29uc29sZS5sb2codik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2cnKVswXS5zdHlsZS5oZWlnaHQgPSBgJHt2fXB4YDtcbn1cblxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRWaWV3cG9ydEhlaWdodCgpO1xuICAgICAgICBzaG93TmF2KCk7XG4gICAgICAgIHNldENvbHVtbkhlaWdodCgpO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjI1ICkge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWdlQm90dG9tID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtID0gc2Nyb2xsW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOTUpKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg1MHB4KSc7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwyW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOSkpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg1MHB4KSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtID0gc2Nyb2xsM1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjg1KSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGVsZW0gPSBzY3JvbGxbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8vICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45NSkpIHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGxbaV0uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgZWxlbSA9IHNjcm9sbDJbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8vICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45NSkpIHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGwyW2ldLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgc2Nyb2xsMltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtZWZmZWN0Jyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGxldCBlbGVtID0gc2Nyb2xsM1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgLy8gICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjk1KSkge1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbDNbaV0uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGwzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBzZXRWaWV3cG9ydEhlaWdodCgpO1xuICAgIGV2ZW50cygpO1xuICAgIHRvZ2dsZURyb3Bkb3duKCk7XG4gICAgY2xvc2VEcm9wZG93bigpO1xuICAgIHNob3dOYXYoKTtcbiAgICBzZXRDb2x1bW5IZWlnaHQoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpbml0KCk7XG59KTtcblxuIl19
