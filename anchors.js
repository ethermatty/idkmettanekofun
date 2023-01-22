'use strict';

function calcAnchorY(anchor) {
    let el = document.querySelector('#'+anchor);
    let targetY = Math.floor(el.getBoundingClientRect().top + window.pageYOffset);
    return targetY;
  }
  
function scrollToY(y){
    let delta = y - window.pageYOffset;
    let direction = (delta > 0) ? 1 : -1;
    let step = Math.abs(delta / 20);
    
    let t = setInterval(function(){
      window.scrollBy(0, step * direction);
      if(direction == 1 && window.pageYOffset >= y) clearInterval(t);
      if(direction == -1 && window.pageYOffset <= y) clearInterval(t);
      
      if((window.pageYOffset == (document.documentElement.scrollHeight - document.documentElement.clientHeight)) || window.pageYOffset == 0)  clearInterval(t);
    }, 10);
  }

document.querySelector('#goMettaneko').addEventListener('click',function(){
    let targetY = calcAnchorY('mtnk');
    scrollToY(0)
})
document.querySelector('#goServer').addEventListener('click',function(){
    let targetY = calcAnchorY('serv');
    scrollToY(targetY - 100)
});