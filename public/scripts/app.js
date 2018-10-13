(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var button = document.querySelector('#nav-icon3');
// const nav = document.querySelector("#nav");
var nav = document.getElementsByTagName('nav')[0];
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
        if (window.innerWidth < 625) {
            links[i].onclick = function () {
                console.log('click');
                nav.style.display = "none";
                button.classList.remove('open');
            };
        }
    };
};

var setViewportHeight = function setViewportHeight() {
    header.style.height = window.innerHeight + 'px';
    nav.style.height = window.innerHeight + 'px';
};

var showNav = function showNav() {
    if (window.innerWidth > 625) {
        nav.style.display = "flex";
        button.classList.remove('open');
        document.getElementById('panel-title').setAttribute('data', "./public/assets/images/panel-discussions.svg");
    } else {
        nav.style.display = "none";
        document.getElementById('panel-title').setAttribute('data', "./public/assets/images/panel-discussions2.svg");
        document.getElementById('footer').innerHTML = '<h4 id="footer">open hxouse <br> powered by google pixel 3<br>all rights reserved 2018.</h4>';
    }
};

var setColumnHeight = function setColumnHeight() {
    var v = document.getElementById('column').clientHeight;
    document.getElementsByClassName('gg')[0].style.height = v + 'px';
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
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        } else {
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
        }
    };
};

var swapVid = function swapVid() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('carousel').innerHTML = '\n        <img class="hx1" src="./public/assets/images/hxouselive-carousel-placeholder_4.gif">\n        ';
    } else {
        document.getElementById('carousel').innerHTML = '\n        <video loop class="hx1" autoplay>\n            <source src="./public/assets/images/HXOUSE-CAROUSEL-0e0e0e.mp4" type="video/mp4">\n            Your browser does not support the video tag.\n        </video> \n        ';
    }
};

var init = function init() {
    setViewportHeight();
    events();
    toggleDropdown();
    closeDropdown();
    showNav();
    swapVid();
    setColumnHeight();
};

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBO0FBQ0EsSUFBTSxNQUFNLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLHVCQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDSCxhQUpEO0FBS0g7QUFDSjtBQUNKLENBVkQ7O0FBWUEsSUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLEdBQU07QUFDNUIsV0FBTyxLQUFQLENBQWEsTUFBYixHQUF5QixPQUFPLFdBQWhDO0FBQ0EsUUFBSSxLQUFKLENBQVUsTUFBVixHQUFzQixPQUFPLFdBQTdCO0FBQ0gsQ0FIRDs7QUFLQSxJQUFNLFVBQVUsU0FBVixPQUFVLEdBQU07QUFDbEIsUUFBSSxPQUFPLFVBQVAsR0FBb0IsR0FBeEIsRUFBOEI7QUFDMUIsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsWUFBdkMsQ0FBb0QsTUFBcEQsRUFBNEQsOENBQTVEO0FBQ0gsS0FKRCxNQUlPO0FBQ0gsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsWUFBdkMsQ0FBb0QsTUFBcEQsRUFBNEQsK0NBQTVEO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxTQUFsQztBQUNIO0FBQ0osQ0FWRDs7QUFZQSxJQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQzFCLFFBQU0sSUFBSSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBNUM7QUFDQSxhQUFTLHNCQUFULENBQWdDLElBQWhDLEVBQXNDLENBQXRDLEVBQXlDLEtBQXpDLENBQStDLE1BQS9DLEdBQTJELENBQTNEO0FBQ0gsQ0FIRDs7QUFLQSxJQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDakIsV0FBTyxRQUFQLEdBQWtCLFlBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0gsS0FKRDs7QUFNQSxXQUFPLFFBQVAsR0FBa0IsWUFBWTtBQUMxQixlQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7O0FBRUEsWUFBSSxPQUFPLFVBQVAsR0FBb0IsR0FBeEIsRUFBOEI7QUFDMUIsZ0JBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDSDtBQUNELFlBQUksaUVBQWlFLElBQWpFLENBQXNFLFVBQVUsU0FBaEYsQ0FBSixFQUFpRztBQUM3RjtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJLGFBQWEsU0FBUyxJQUFULENBQWMsU0FBZCxHQUEwQixPQUFPLFdBQWxEO0FBQ0EsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3BDLG9CQUFJLE9BQU8sT0FBTyxDQUFQLEVBQVUscUJBQVYsRUFBWDtBQUNBLG9CQUFJLEtBQUssR0FBTCxHQUFZLGFBQWEsR0FBN0IsRUFBbUM7QUFDL0IsMkJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQSwyQkFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixpQkFBNUI7QUFDSCxpQkFIRCxNQUdPO0FBQ0gsMkJBQU8sQ0FBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQSwyQkFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixrQkFBNUI7QUFFSDtBQUNKOztBQUVELGlCQUFLLElBQUksS0FBSSxDQUFiLEVBQWdCLEtBQUksUUFBUSxNQUE1QixFQUFvQyxJQUFwQyxFQUF5QztBQUNyQyxvQkFBSSxRQUFPLFFBQVEsRUFBUixFQUFXLHFCQUFYLEVBQVg7QUFDQSxvQkFBSSxNQUFLLEdBQUwsR0FBWSxhQUFhLEVBQTdCLEVBQWtDO0FBQzlCLDRCQUFRLEVBQVIsRUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLENBQTNCO0FBQ0EsNEJBQVEsRUFBUixFQUFXLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0gsaUJBSEQsTUFHTztBQUNILDRCQUFRLEVBQVIsRUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLENBQTNCO0FBQ0EsNEJBQVEsRUFBUixFQUFXLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsa0JBQTdCO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBcEMsRUFBeUM7QUFDckMsb0JBQUksU0FBTyxRQUFRLEdBQVIsRUFBVyxxQkFBWCxFQUFYO0FBQ0Esb0JBQUksT0FBSyxHQUFMLEdBQVksYUFBYSxHQUE3QixFQUFtQztBQUMvQiw0QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixDQUEzQjtBQUNBLDRCQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLGlCQUE3QjtBQUNILGlCQUhELE1BR087QUFDSCw0QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixDQUEzQjtBQUNBLDRCQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLGtCQUE3QjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBNUNEO0FBNkNILENBcEREOztBQXNEQSxJQUFNLFVBQVUsU0FBVixPQUFVLEdBQU07QUFDbEIsUUFBSSxpRUFBaUUsSUFBakUsQ0FBc0UsVUFBVSxTQUFoRixDQUFKLEVBQWlHO0FBQzdGLGlCQUFTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsU0FBcEM7QUFHSCxLQUpELE1BSU87QUFDSCxpQkFBUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLFNBQXBDO0FBTUg7QUFDSixDQWJEOztBQWVBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FSRDs7QUFVQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFTLEtBQVQsRUFBZ0I7QUFDMUQ7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuLy8gY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF07XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X2xpbmsnKTtcbmNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbCcpO1xuY29uc3Qgc2Nyb2xsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbDInKTtcbmNvbnN0IHNjcm9sbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwzJyk7XG5cbmNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjUpIHtcbiAgICAgICAgICAgIGxpbmtzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNvbnN0IHNldFZpZXdwb3J0SGVpZ2h0ID0gKCkgPT4ge1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xuICAgIG5hdi5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xufVxuXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYyNSApIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmVsLXRpdGxlJykuc2V0QXR0cmlidXRlKCdkYXRhJywgXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BhbmVsLWRpc2N1c3Npb25zLnN2Z1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZWwtdGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFuZWwtZGlzY3Vzc2lvbnMyLnN2Z1wiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpLmlubmVySFRNTCA9IGA8aDQgaWQ9XCJmb290ZXJcIj5vcGVuIGh4b3VzZSA8YnI+IHBvd2VyZWQgYnkgZ29vZ2xlIHBpeGVsIDM8YnI+YWxsIHJpZ2h0cyByZXNlcnZlZCAyMDE4LjwvaDQ+YFxuICAgIH1cbn1cblxuY29uc3Qgc2V0Q29sdW1uSGVpZ2h0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sdW1uJykuY2xpZW50SGVpZ2h0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dnJylbMF0uc3R5bGUuaGVpZ2h0ID0gYCR7dn1weGA7XG59XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0Vmlld3BvcnRIZWlnaHQoKTtcbiAgICAgICAgc2hvd05hdigpO1xuICAgICAgICBzZXRDb2x1bW5IZWlnaHQoKTtcbiAgICB9XG4gICAgXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYyNSApIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwYWdlQm90dG9tID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtID0gc2Nyb2xsW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjk1KSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg1MHB4KSc7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtID0gc2Nyb2xsMltpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50b3AgPCAocGFnZUJvdHRvbSAqIC45KSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNTBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjg1KSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwzW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNTBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3Qgc3dhcFZpZCA9ICgpID0+IHtcbiAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgY2xhc3M9XCJoeDFcIiBzcmM9XCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2h4b3VzZWxpdmUtY2Fyb3VzZWwtcGxhY2Vob2xkZXJfNC5naWZcIj5cbiAgICAgICAgYFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHZpZGVvIGxvb3AgY2xhc3M9XCJoeDFcIiBhdXRvcGxheT5cbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9IWE9VU0UtQ0FST1VTRUwtMGUwZTBlLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj5cbiAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXG4gICAgICAgIDwvdmlkZW8+IFxuICAgICAgICBgXG4gICAgfVxufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHNldFZpZXdwb3J0SGVpZ2h0KCk7XG4gICAgZXZlbnRzKCk7XG4gICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgc2hvd05hdigpO1xuICAgIHN3YXBWaWQoKTtcbiAgICBzZXRDb2x1bW5IZWlnaHQoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpbml0KCk7XG59KTtcblxuIl19
