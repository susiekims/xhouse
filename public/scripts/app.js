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
            for (var i = 0; i < scroll.length; i++) {
                scroll[i].classList.add('scroll-effect');
            }
            for (var _i = 0; _i < scroll2.length; _i++) {
                scroll2[_i].classList.add('scroll-effect');
            }
            for (var _i2 = 0; _i2 < scroll3.length; _i2++) {
                scroll3[_i2].classList.add('scroll-effect');
            }
        } else {
            var pageBottom = document.body.scrollTop + window.innerHeight;

            for (var _i3 = 0; _i3 < scroll.length; _i3++) {
                var elem = scroll[_i3].getBoundingClientRect();
                if (elem.top < pageBottom * .95) {
                    scroll[_i3].classList.add('scroll-effect');
                } else if (elem.bottom < 0 || elem.top > pageBottom) {
                    scroll[_i3].classList.remove('scroll-effect');
                }
            }

            for (var _i4 = 0; _i4 < scroll2.length; _i4++) {
                var _elem = scroll2[_i4].getBoundingClientRect();
                if (_elem.top < pageBottom * .95) {
                    scroll2[_i4].classList.add('scroll-effect');
                } else if (_elem.bottom < 0 || _elem.top > pageBottom) {
                    scroll2[_i4].classList.remove('scroll-effect');
                }
            }

            for (var _i5 = 0; _i5 < scroll3.length; _i5++) {
                var _elem2 = scroll3[_i5].getBoundingClientRect();
                if (_elem2.top < pageBottom * .95) {
                    scroll3[_i5].classList.add('scroll-effect');
                } else if (_elem2.bottom < 0 || _elem2.top > pageBottom) {
                    scroll3[_i5].classList.remove('scroll-effect');
                }
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

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBSSxL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QUFiLEVBQWdCLE1BQUksUUFBUSxNQUE1QixFQUFvQyxLQUFwQyxFQUF5QztBQUNyQyxvQkFBSSxTQUFPLFFBQVEsR0FBUixFQUFXLHFCQUFYLEVBQVg7QUFDQSxvQkFBSSxPQUFLLEdBQUwsR0FBWSxhQUFhLEdBQTdCLEVBQW1DO0FBQy9CLDRCQUFRLEdBQVIsRUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGVBQXpCO0FBQ0gsaUJBRkQsTUFFTyxJQUFJLE9BQUssTUFBTCxHQUFjLENBQWQsSUFBbUIsT0FBSyxHQUFMLEdBQVcsVUFBbEMsRUFBOEM7QUFDakQsNEJBQVEsR0FBUixFQUFXLFNBQVgsQ0FBcUIsTUFBckIsQ0FBNEIsZUFBNUI7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQTVDRDtBQTZDSCxDQW5ERDs7QUFxREEsSUFBTSxPQUFPLFNBQVAsSUFBTyxHQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBTkQ7O0FBUUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBUyxLQUFULEVBQWdCO0FBQzFEO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtaWNvbjMnKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9saW5rJyk7XG5jb25zdCBzY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwnKTtcbmNvbnN0IHNjcm9sbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwyJyk7XG5jb25zdCBzY3JvbGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsMycpO1xuXG5jb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjIwKSB7XG4gICAgICAgICAgICBsaW5rc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5jb25zdCBzZXRWaWV3cG9ydEhlaWdodCA9ICgpID0+IHtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YDtcbiAgICBuYXYuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YDtcbn1cblxuY29uc3Qgc2hvd05hdiA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2MjUgKSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0Vmlld3BvcnRIZWlnaHQoKTtcbiAgICAgICAgc2hvd05hdigpO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjI1ICkge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtZWZmZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGFnZUJvdHRvbSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbFtpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45NSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsW2ldLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW0uYm90dG9tIDwgMCB8fCBlbGVtLnRvcCA+IHBhZ2VCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbDJbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOTUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbS5ib3R0b20gPCAwIHx8IGVsZW0udG9wID4gcGFnZUJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbDNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOTUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbS5ib3R0b20gPCAwIHx8IGVsZW0udG9wID4gcGFnZUJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgc2V0Vmlld3BvcnRIZWlnaHQoKTtcbiAgICBldmVudHMoKTtcbiAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICBzaG93TmF2KCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaW5pdCgpO1xufSk7XG5cbiJdfQ==
