document.addEventListener("DOMContentLoaded", function(event) {
    animateLogo();
  });
  
  function animateLogo() {
    var logo = document.getElementById("logo");
    var rotation = 0;
    setInterval(function() {
      rotation += 2;
      logo.style.transform = "rotate(" + rotation + "deg)";
    }, 50);
  }
  