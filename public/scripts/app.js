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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBSSxL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LEtBQXBDLEVBQXlDO0FBQ3JDLGdCQUFJLFNBQU8sUUFBUSxHQUFSLEVBQVcscUJBQVgsRUFBWDtBQUNBLGdCQUFJLE9BQUssR0FBTCxHQUFZLGFBQWEsR0FBN0IsRUFBbUM7QUFDL0Isd0JBQVEsR0FBUixFQUFXLEtBQVgsQ0FBaUIsT0FBakIsR0FBMkIsQ0FBM0I7QUFDQSx3QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixTQUFqQixHQUE2QixpQkFBN0I7QUFDSCxhQUhELE1BR087QUFDSCx3QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixDQUEzQjtBQUNBLHdCQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLGtCQUE3QjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQXJFRDtBQXNFSCxDQTdFRDs7QUErRUEsSUFBTSxPQUFPLFNBQVAsSUFBTyxHQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FQRDs7QUFTQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFTLEtBQVQsRUFBZ0I7QUFDMUQ7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X2xpbmsnKTtcbmNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbCcpO1xuY29uc3Qgc2Nyb2xsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbDInKTtcbmNvbnN0IHNjcm9sbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwzJyk7XG5cbmNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjApIHtcbiAgICAgICAgICAgIGxpbmtzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNvbnN0IHNldFZpZXdwb3J0SGVpZ2h0ID0gKCkgPT4ge1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xufVxuXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYyNSApIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmVsLXRpdGxlJykuc2V0QXR0cmlidXRlKCdkYXRhJywgXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhbmVsLWRpc2N1c3Npb25zLnN2Z1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZWwtdGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFuZWwtZGlzY3Vzc2lvbnMyLnN2Z1wiKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldENvbHVtbkhlaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCB2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbHVtbicpLmNsaWVudEhlaWdodDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnZycpWzBdLnN0eWxlLmhlaWdodCA9IGAke3Z9cHhgO1xufVxuXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFZpZXdwb3J0SGVpZ2h0KCk7XG4gICAgICAgIHNob3dOYXYoKTtcbiAgICAgICAgc2V0Q29sdW1uSGVpZ2h0KCk7XG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjUgKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhZ2VCb3R0b20gPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGxbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45NSkpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpJztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbDJbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45KSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuODUpKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNTBweCknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgZWxlbSA9IHNjcm9sbFtpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgLy8gICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjk1KSkge1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbFtpXS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtZWZmZWN0Jyk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtZWZmZWN0Jyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGxldCBlbGVtID0gc2Nyb2xsMltpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgLy8gICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjk1KSkge1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbDJbaV0uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGwyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1lZmZlY3QnKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGVsZW0gPSBzY3JvbGwzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAvLyAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOTUpKSB7XG4gICAgICAgIC8vICAgICAgICAgc2Nyb2xsM1tpXS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtZWZmZWN0Jyk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbDNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWVmZmVjdCcpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHNldFZpZXdwb3J0SGVpZ2h0KCk7XG4gICAgZXZlbnRzKCk7XG4gICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgc2hvd05hdigpO1xuICAgIHNldENvbHVtbkhlaWdodCgpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGluaXQoKTtcbn0pO1xuXG4iXX0=
