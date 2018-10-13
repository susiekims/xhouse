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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBO0FBQ0EsSUFBTSxNQUFNLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ3pCLFdBQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3RCLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFlBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUNqQyxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILFNBRkUsTUFFSTtBQUNILGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGtCQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsd0JBQVEsR0FBUixDQUFZ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aUJBSEQsTUFHTztBQUNILDRCQUFRLEVBQVIsRUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLENBQTNCO0FBQ0EsNEJBQVEsRUFBUixFQUFXLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsa0JBQTdCO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBcEMsRUFBeUM7QUFDckMsb0JBQUksU0FBTyxRQUFRLEdBQVIsRUFBVyxxQkFBWCxFQUFYO0FBQ0Esb0JBQUksT0FBSyxHQUFMLEdBQVksYUFBYSxHQUE3QixFQUFtQztBQUMvQiw0QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixDQUEzQjtBQUNBLDRCQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLGlCQUE3QjtBQUNILGlCQUhELE1BR087QUFDSCw0QkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixDQUEzQjtBQUNBLDRCQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLGtCQUE3QjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBNUNEO0FBNkNILENBcEREOztBQXNEQSxJQUFNLE9BQU8sU0FBUCxJQUFPLEdBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQVBEOztBQVNBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVMsS0FBVCxFQUFnQjtBQUMxRDtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWljb24zJyk7XG4vLyBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfbGluaycpO1xuY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsJyk7XG5jb25zdCBzY3JvbGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsMicpO1xuY29uc3Qgc2Nyb2xsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbDMnKTtcblxuY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYyNSkge1xuICAgICAgICAgICAgbGlua3NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuY29uc3Qgc2V0Vmlld3BvcnRIZWlnaHQgPSAoKSA9PiB7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XG4gICAgbmF2LnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XG59XG5cbmNvbnN0IHNob3dOYXYgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjI1ICkge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZWwtdGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFuZWwtZGlzY3Vzc2lvbnMuc3ZnXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lbC10aXRsZScpLnNldEF0dHJpYnV0ZSgnZGF0YScsIFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wYW5lbC1kaXNjdXNzaW9uczIuc3ZnXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJykuaW5uZXJIVE1MID0gYDxoNCBpZD1cImZvb3RlclwiPm9wZW4gaHhvdXNlIDxicj4gcG93ZXJlZCBieSBnb29nbGUgcGl4ZWwgMzxicj5hbGwgcmlnaHRzIHJlc2VydmVkIDIwMTguPC9oND5gXG4gICAgfVxufVxuXG5jb25zdCBzZXRDb2x1bW5IZWlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2x1bW4nKS5jbGllbnRIZWlnaHQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2cnKVswXS5zdHlsZS5oZWlnaHQgPSBgJHt2fXB4YDtcbn1cblxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRWaWV3cG9ydEhlaWdodCgpO1xuICAgICAgICBzaG93TmF2KCk7XG4gICAgICAgIHNldENvbHVtbkhlaWdodCgpO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjI1ICkge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHBhZ2VCb3R0b20gPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGxbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuOTUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpJztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwyW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLnRvcCA8IChwYWdlQm90dG9tICogLjkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsMltpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg1MHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbDNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0udG9wIDwgKHBhZ2VCb3R0b20gKiAuODUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg1MHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHNldFZpZXdwb3J0SGVpZ2h0KCk7XG4gICAgZXZlbnRzKCk7XG4gICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgc2hvd05hdigpO1xuICAgIHNldENvbHVtbkhlaWdodCgpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGluaXQoKTtcbn0pO1xuXG4iXX0=
