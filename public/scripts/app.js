(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var button = document.querySelector('#nav-icon3');
var nav = document.querySelector("#nav");

button.onclick = function () {
   button.classList.toggle('open');
   if (nav.style.display === "flex") {
      nav.style.display = "none";
   } else {
      nav.style.display = "flex";
   }
};

window.addEventListener("resize", function () {
   if (window.innerWidth > 600) {
      nav.style.display = "flex";
      button.classList.remove('open');
   } else {
      nav.style.display = "none";
   }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQU0sTUFBTSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsWUFBVztBQUN6QixVQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQyxPQUFJLElBQUksS0FBSixDQUFVLE9BQVYsS0FBc0IsTUFBMUIsRUFBa0M7QUFDOUIsVUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNILElBRkQsTUFFTztBQUNILFVBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDSDtBQUNKLENBUEQ7O0FBU0EsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO0FBQzFDLE9BQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQzFCLFVBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsTUFBcEI7QUFDQSxhQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDRixJQUhELE1BR087QUFDTixVQUFJLEtBQUosQ0FBVSxPQUFWLEdBQW9CLE1BQXBCO0FBQ0E7QUFDSCxDQVBEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1pY29uMycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5cbmJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIFx0YnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgXHQgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICB9IGVsc2Uge1xuICAgXHRuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgfVxufSk7Il19
