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

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBSSxL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QUFXLEtBQVgsQ0FBaUIsT0FBakIsR0FBMkIsR0FBM0I7QUFDSDtBQUNKO0FBQ0osS0ExQ0Q7QUEyQ0gsQ0FqREQ7O0FBbURBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQU5EOztBQVFBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVMsS0FBVCxFQUFnQjtBQUMxRDtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWljb24zJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfbGluaycpO1xuY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsJyk7XG5jb25zdCBzY3JvbGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsMicpO1xuY29uc3Qgc2Nyb2xsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbDMnKTtcblxuY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYyMCkge1xuICAgICAgICAgICAgbGlua3NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuY29uc3Qgc2V0Vmlld3BvcnRIZWlnaHQgPSAoKSA9PiB7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XG4gICAgbmF2LnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XG59XG5cbmNvbnN0IHNob3dOYXYgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjI1ICkge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFZpZXdwb3J0SGVpZ2h0KCk7XG4gICAgICAgIHNob3dOYXYoKTtcbiAgICB9XG4gICAgXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYyNSApIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGxbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoZWxlbS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0ICogLjkpKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwcHgpXCJcbiAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwcHgpXCJcbiAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbDJbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoZWxlbS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0ICogLjgpKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMHB4KVwiXG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwcHgpXCJcbiAgICAgICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHdpbmRvdy5pbm5lckhlaWdodCAqIC43KSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDBweClcIlxuICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4gICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBzZXRWaWV3cG9ydEhlaWdodCgpO1xuICAgIGV2ZW50cygpO1xuICAgIHRvZ2dsZURyb3Bkb3duKCk7XG4gICAgY2xvc2VEcm9wZG93bigpO1xuICAgIHNob3dOYXYoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpbml0KCk7XG59KTtcblxuIl19
