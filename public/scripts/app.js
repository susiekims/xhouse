(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var button = document.querySelector('#nav-icon3');
var nav = document.querySelector("#nav");
var header = document.querySelector("#header");
var links = document.getElementsByClassName('nav_link');
var scroll = document.getElementsByClassName('scroll');
var scroll2 = document.getElementsByClassName('scroll2');
var scroll3 = document.getElementsByClassName('scroll3');
var random = document.getElementsByClassName('random');

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
    header.style.height = window.innerHeight + "px";
    nav.style.height = window.innerHeight + "px";
    // console.log(window.innerHeight);
    // console.log(hxouse.offsetTop);
};

window.onscroll = function () {
    for (var _i = 0; _i < scroll.length; _i++) {
        var elem = scroll[_i].getBoundingClientRect();
        if (elem.top < window.innerHeight * .9) {
            scroll[_i].style.transform = "translateY(0px)";
            scroll[_i].style.opacity = "1";
        } else {
            scroll[_i].style.transform = "translateY(100px)";
            scroll[_i].style.opacity = "0";
        }
    }

    for (var _i2 = 0; _i2 < scroll2.length; _i2++) {
        var _elem = scroll2[_i2].getBoundingClientRect();
        if (_elem.top < window.innerHeight * .8) {
            scroll2[_i2].style.transform = "translateY(0px)";
            scroll2[_i2].style.opacity = "1";
        } else {
            scroll2[_i2].style.transform = "translateY(100px)";
            scroll2[_i2].style.opacity = "0";
        }
    }
    for (var _i3 = 0; _i3 < scroll3.length; _i3++) {
        var _elem2 = scroll3[_i3].getBoundingClientRect();
        if (_elem2.top < window.innerHeight * .7) {
            scroll3[_i3].style.transform = "translateY(0px)";
            scroll3[_i3].style.opacity = "1";
        } else {
            scroll3[_i3].style.transform = "translateY(100px)";
            scroll3[_i3].style.opacity = "0";
        }
    }
};

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

window.addEventListener("resize", function () {
    if (window.innerWidth > 625) {
        nav.style.display = "flex";
        button.classList.remove('open');
    } else {
        nav.style.display = "none";
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmO0FBQ0EsSUFBTSxVQUFVLFNBQVMsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBaEI7QUFDQSxJQUFNLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFoQjtBQUNBLElBQU0sU0FBUyxTQUFTLHNCQUFULENBQWdDLFFBQWhDLENBQWY7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFlBQVc7QUFDekIsV0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLE1BQXhCO0FBQ0MsUUFBSSxJQUFJLEtBQUosQ0FBVSxPQUFWLEtBQXNCLE1BQTFCLEVBQWtDO0FBQzlCLFlBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0g7QUFDSixDQVBEOztBQVNBLEtBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFFBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLGNBQU0sQ0FBTixFQUFTLE9BQVQsR0FBbUIsWUFBVTtBQUN6QixvQkFBUSxHQUFSLENBQVksT0FBWjtBQUNBLGdCQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0EsbUJBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNILFNBSkQ7QUFLSDtBQUNKOztBQUVELE9BQU8sUUFBUCxHQUFrQixZQUFXO0FBQ3pCLFdBQU8sS0FBUCxDQUFhLE1BQWIsR0FBeUIsT0FBTyxXQUFoQztBQUNBLFFBQUksS0FBSixDQUFVLE1BQVYsR0FBc0IsT0FBTyxXQUE3QjtBQUNBO0FBQ0E7QUFDSCxDQUxEOztBQU9BLE9BQU8sUUFBUCxHQUFrQixZQUFZO0FBQzFCLFNBQUssSUFBSSxLQUFJLENBQWIsRUFBZ0IsS0FBSSxPQUFPLE1BQTNCLEVBQW1DLElBQW5DLEVBQXdDO0FBQ3BDLFlBQUksT0FBTyxPQUFPLEVBQVAsRUFBVSxxQkFBVixFQUFYO0FBQ0EsWUFBSSxLQUFLLEdBQUwsR0FBWSxPQUFPLFdBQVAsR0FBcUIsRUFBckMsRUFBMEM7QUFDdEMsbUJBQU8sRUFBUCxFQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBNEIsaUJBQTVCO0FBQ0EsbUJBQU8sRUFBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsR0FBMUI7QUFFSCxTQUpELE1BSU87QUFDSCxtQkFBTyxFQUFQLEVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixtQkFBNUI7QUFDQSxtQkFBTyxFQUFQLEVBQVUsS0FBVixDQUFnQixPQUFoQixHQUEwQixHQUExQjtBQUNIO0FBQ0o7O0FBRUQsU0FBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBcEMsRUFBeUM7QUFDckMsWUFBSSxRQUFPLFFBQVEsR0FBUixFQUFXLHFCQUFYLEVBQVg7QUFDQSxZQUFJLE1BQUssR0FBTCxHQUFZLE9BQU8sV0FBUCxHQUFxQixFQUFyQyxFQUEwQztBQUN0QyxvQkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixTQUFqQixHQUE2QixpQkFBN0I7QUFDQSxvQkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixHQUEzQjtBQUVILFNBSkQsTUFJTztBQUNILG9CQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLG1CQUE3QjtBQUNBLG9CQUFRLEdBQVIsRUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLEdBQTNCO0FBQ0g7QUFDSjtBQUNELFNBQUssSUFBSSxNQUFJLENBQWIsRUFBZ0IsTUFBSSxRQUFRLE1BQTVCLEVBQW9DLEtBQXBDLEVBQXlDO0FBQ3JDLFlBQUksU0FBTyxRQUFRLEdBQVIsRUFBVyxxQkFBWCxFQUFYO0FBQ0EsWUFBSSxPQUFLLEdBQUwsR0FBWSxPQUFPLFdBQVAsR0FBcUIsRUFBckMsRUFBMEM7QUFDdEMsb0JBQVEsR0FBUixFQUFXLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0Esb0JBQVEsR0FBUixFQUFXLEtBQVgsQ0FBaUIsT0FBakIsR0FBMkIsR0FBM0I7QUFFSCxTQUpELE1BSU87QUFDSCxvQkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixTQUFqQixHQUE2QixtQkFBN0I7QUFDQSxvQkFBUSxHQUFSLEVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixHQUEzQjtBQUNIO0FBQ0o7QUFFSixDQXBDRDs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLFFBQVAsRyxDQUFtQjs7QUFFbkIsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO0FBQzFDLFFBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQThCO0FBQzNCLFlBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDQSxlQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDRixLQUhELE1BR087QUFDTixZQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0E7QUFDSCxDQVBEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X2xpbmsnKTtcbmNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbCcpO1xuY29uc3Qgc2Nyb2xsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbDInKTtcbmNvbnN0IHNjcm9sbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGwzJyk7XG5jb25zdCByYW5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyYW5kb20nKTtcblxuYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgXHRidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICBcdCBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG59XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjApIHtcbiAgICAgICAgbGlua3NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XG4gICAgbmF2LnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhoeG91c2Uub2Zmc2V0VG9wKTtcbn1cblxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtID0gc2Nyb2xsW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoZWxlbS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0ICogLjkpKSB7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDBweClcIlxuICAgICAgICAgICAgc2Nyb2xsW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGwyW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoZWxlbS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0ICogLjgpKSB7XG4gICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwcHgpXCJcbiAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbDJbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4gICAgICAgICAgICBzY3JvbGwyW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsMy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZWxlbSA9IHNjcm9sbDNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChlbGVtLnRvcCA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNykpIHtcbiAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDBweClcIlxuICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsM1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwcHgpXCJcbiAgICAgICAgICAgIHNjcm9sbDNbaV0uc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICAgIH1cbiAgICB9XG4gICBcbn1cblxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbS5sZW5ndGg7IGkgKyspIHtcbi8vICAgICAvLyBsZXQgbnVtID0gcmFuZG9tW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gICAgIGxldCBjb3VudCA9IHBhcnNlSW50KHJhbmRvbVtpXS5pbm5lckhUTUwpXG4vLyAgICAgLy8gY29uc29sZS5sb2coY291bnQpO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuLy8gICAgICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICByYW5kb21baV0uaW5uZXJIVE1MID0gaTtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xuLy8gICAgICAgICB9LCAxMDAwKTtcbi8vICAgICB9XG4vLyB9XG5cbndpbmRvdy5vbnJlc2l6ZSgpOyAvLyBjYWxsZWQgdG8gaW5pdGlhbGx5IHNldCB0aGUgaGVpZ2h0XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjI1ICkge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICB9IGVsc2Uge1xuICAgXHRuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgfVxufSk7XG4iXX0=
