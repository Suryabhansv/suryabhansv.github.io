



let speed = 50;
function displayText() {
  let welcomeString = `Suryabhan Singh Vaghela`,
    i = 0;
  window.setInterval(function() {
    if (welcomeString.charAt(i) == "^") {
      title.innerHTML += "<br>";
      i++;
    }
    if (welcomeString.length == i) {
      doneShowing();
    }
    title.innerHTML += welcomeString.charAt(i);
    i++;
  }, speed);
}

function doneShowing() {
  let string = "things",
    i = 0;
  strikeText.setAttribute("style", "text-decoration:line-through");
  window.setInterval(function() {
    newText.innerHTML += string.charAt(i);
    i++;
  }, speed);
}

displayText();


 
!function(t){"use strict";t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:e.offset().top},1e3,"easeInOutExpo"),!1}}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#sideNav"})}(jQuery);
