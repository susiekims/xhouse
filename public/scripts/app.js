(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var button = document.querySelector('#nav-icon3');
var nav = document.querySelector("#nav");
var links = document.getElementsByClassName('nav_link');
console.log(links);

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
    document.body.height = window.innerHeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU0sUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQWQ7QUFDQSxRQUFRLEdBQVIsQ0FBWSxLQUFaOztBQUVBLE9BQU8sT0FBUCxHQUFpQixZQUFXO0FBQ3pCLFdBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNDLFFBQUksSUFBSSxLQUFKLENBQVUsT0FBVixLQUFzQixNQUExQixFQUFrQztBQUM5QixZQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNIO0FBQ0osQ0FQRDs7QUFTQSxLQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNuQyxRQUFJLE9BQU8sVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QixjQUFNLENBQU4sRUFBUyxPQUFULEdBQW1CLFlBQVU7QUFDekIsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxnQkFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLG1CQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDSCxTQUpEO0FBS0g7QUFDSjs7QUFFRCxPQUFPLFFBQVAsR0FBa0IsWUFBVztBQUN6QixhQUFTLElBQVQsQ0FBYyxNQUFkLEdBQXVCLE9BQU8sV0FBOUI7QUFDSCxDQUZEOztBQUlBLE9BQU8sUUFBUCxHLENBQW1COztBQUVuQixPQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDMUMsUUFBSSxPQUFPLFVBQVAsR0FBb0IsR0FBeEIsRUFBOEI7QUFDM0IsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLGVBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixNQUF4QjtBQUNGLEtBSEQsTUFHTztBQUNOLFlBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDQTtBQUNILENBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWljb24zJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X2xpbmsnKTtcbmNvbnNvbGUubG9nKGxpbmtzKTtcblxuYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgXHRidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICBcdCBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG59XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MjApIHtcbiAgICAgICAgbGlua3NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG59XG5cbndpbmRvdy5vbnJlc2l6ZSgpOyAvLyBjYWxsZWQgdG8gaW5pdGlhbGx5IHNldCB0aGUgaGVpZ2h0XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjIwICkge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICB9IGVsc2Uge1xuICAgXHRuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgfVxufSk7Il19
