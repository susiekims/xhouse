(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var button = document.querySelector('#nav-icon3');
var nav = document.querySelector("#nav");
var header = document.querySelector("#header");
var links = document.getElementsByClassName('nav_link');
var scroll = document.getElementsByClassName('scroll');

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
        if (elem.top < window.innerHeight * .8) {
            scroll[_i].style.transform = "translateY(0px)";
            scroll[_i].style.opacity = "1";
        } else {
            scroll[_i].style.transform = "translateY(100px)";
            scroll[_i].style.opacity = "0";
        }
    }
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFmOztBQUVBLE9BQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3pCLFdBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFFBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUM5QixZQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNIO0FBQ0osQ0FQRDs7QUFTQSxLQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNuQyxRQUFJLE9BQU8sVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QixjQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLG1CQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDSCxTQUpEO0FBS0g7QUFDSjs7QUFFRCxPQUFPLFFBQVAsR0FBa0IsWUFBVztBQUN6QixXQUFPLEtBQVAsQ0FBYSxNQUFiLEdBQXlCLE9BQU8sV0FBaEM7QUFDQSxRQUFJLEtBQUosQ0FBVSxNQUFWLEdBQXNCLE9BQU8sV0FBN0I7QUFDQTtBQUNBO0FBQ0gsQ0FMRDs7QUFPQSxPQUFPLFFBQVAsR0FBa0IsWUFBWTtBQUMxQixTQUFLLElBQUksS0FBSSxDQUFiLEVBQWdCLEtBQUksT0FBTyxNQUEzQixFQUFtQyxJQUFuQyxFQUF3QztBQUNwQyxZQUFJLE9BQU8sT0FBTyxFQUFQLEVBQVUscUJBQVYsRUFBWDtBQUNBLFlBQUksS0FBSyxHQUFMLEdBQVksT0FBTyxXQUFQLEdBQXFCLEVBQXJDLEVBQTBDO0FBQ3RDLG1CQUFPLEVBQVAsRUFBVSxLQUFWLENBQWdCLFNBQWhCLEdBQTRCLGlCQUE1QjtBQUNBLG1CQUFPLEVBQVAsRUFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLEdBQTFCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsbUJBQU8sRUFBUCxFQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBNEIsbUJBQTVCO0FBQ0EsbUJBQU8sRUFBUCxFQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsR0FBMUI7QUFDSDtBQUNKO0FBQ0osQ0FYRDs7QUFhQSxPQUFPLFFBQVAsRyxDQUFtQjs7QUFFbkIsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO0FBQzFDLFFBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQThCO0FBQzNCLFlBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDQSxlQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDRixLQUhELE1BR087QUFDTixZQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0E7QUFDSCxDQVBEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X2xpbmsnKTtcbmNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbCcpO1xuXG5idXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBcdGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIFx0IGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbn1cblxuZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYyMCkge1xuICAgICAgICBsaW5rc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YDtcbiAgICBuYXYuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YDtcbiAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGh4b3VzZS5vZmZzZXRUb3ApO1xufVxuXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW0gPSBzY3JvbGxbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChlbGVtLnRvcCA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAuOCkpIHtcbiAgICAgICAgICAgIHNjcm9sbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMHB4KVwiXG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4gICAgICAgICAgICBzY3JvbGxbaV0uc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5vbnJlc2l6ZSgpOyAvLyBjYWxsZWQgdG8gaW5pdGlhbGx5IHNldCB0aGUgaGVpZ2h0XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjIwICkge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICB9IGVsc2Uge1xuICAgXHRuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgfVxufSk7XG4iXX0=
