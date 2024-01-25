    // let mySound=new Audio('Harry Potter Theme-freeringtonesfree.mobi.mp3');



    function init() {
      document.onmousemove = mousemove;
  }
  
  function mousemove(event) {
      var mouse_x = event.clientX;
      var mouse_y = event.clientY;
  
      var fl = document.getElementById('flashlight');
      fl.style.transform = 'translate(calc(' + mouse_x + 'px - 50vw), ' + 'calc(' + mouse_y + 'px - 50vh))';
  }
  
  init();
  
  var image = document.getElementById('cursor');
  
  // Add event listener for mouse move
  document.addEventListener('mousemove', function(event) {
    // Set the image position to follow the cursor
    image.style.left = event.pageX + 'px';
    image.style.top = event.pageY + 'px';
  });
  
  $(document).ready(function() {
    var canvas = $('#canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    if(canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var w = canvas.width;
      var h = canvas.height;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      
      
      var init = [];
      var maxParts = 1000;
      for(var a = 0; a < maxParts; a++) {
        init.push({
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 10 + 2,
          ys: Math.random() * 10 + 10
        })
      }
      
      var particles = [];
      for(var b = 0; b < maxParts; b++) {
        particles[b] = init[b];
      }
      
      function draw() {
        ctx.clearRect(0, 0, w, h);
        for(var c = 0; c < particles.length; c++) {
          var p = particles[c];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
          ctx.stroke();
        }
        move();
      }
      
      function move() {
        for(var b = 0; b < particles.length; b++) {
          var p = particles[b];
          p.x += p.xs;
          p.y += p.ys;
          if(p.x > w || p.y > h) {
            p.x = Math.random() * w;
            p.y = -20;
          }
        }
      }
      
      setInterval(draw, 30);
      
    }
  });
  
  
  window.onload = function(){
    //hide the preloader
    document.querySelector("#pre-loader").style.display = "none";
  }













    var radius=340; 

    var autoRotate=true;
    var rotateSpeed=-60;
    var imgWidth=190;
    var imgHeight=230;

    setTimeout(init,1000);

    var odrag = document.getElementById('drag');
    var ospin = document.getElementById('spin');
    var aImg = ospin.getElementsByTagName('img');
    var aEle = [...aImg];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    var ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime){
      for(var i=0; i <aEle.length; i++){
        aEle[i].style.transform = "rotateY(" +(i* (360 /aEle.length)) +"deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length-i) / 4 + "s";
      
      }

    }
    function applyTransform(obj){
      if(tY > 180) tY = 180;
      if(tY < 0)tY =0;

      obj.style.transform = "rotateX("+ (-tY)
       + "deg) rotateY(" + (tX) + "deg)";

    }
    function playSpin(yes) {
      ospin.style.animationPlayState = (yes ? 'running':'paused');
    }

    var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;


    if(autoRotate){ 
    var animationName = (rotateSpeed>0 ?
      'spin':'spinRevert');
      ospin.style.animation =`${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    document.onpointerdown = function (e){
      clearInterval(odrag.timer);
      e = e || windows.event;
      var sX = e.clientX,
          sY = e.clientY;
  

  

  
    this.onpointermove = function (e){
      e = e || window.event;
      var nX = e.clientX,
          nY = e.clientY;



          desX = nX - sX;
          desY = nY - sY;
          tX += desX * 0.1;
          tY += desY * 0.1;

          applyTransform(odrag);

          sX = nX;
          sY = nY;
    };

    this.onpointerup = function (e){
      odrag.timer = setInterval(function(){
        desX *=0.95;
        desY *=0.95;
        tX +=desX *0.1;
        tY += desY * 0.1;

        applyTransform(odrag);

        playSpin(false);

        if(Math.abs(desX) < 0.5 && Math.abs
        (desY) < 0.5){
          clearInterval(odrag.timer);
          playSpin(true);

        }

      },17);

      this.onpointermove = this.onpointerup = null;
      
    };
    return false;

  };
   
  // window.addEventListener("DOMContentLoaded",event =>{
  //   const audio = document.querySelector("audio");
  //   audio.volume = 0.2;
  //   audio.play();
  // });
  // if (autoRotate=true) {
    //  let mySound=new Audio('Harry Potter Theme-freeringtonesfree.mobi.mp3');
    //  mySound.play();
  
   


    
 
