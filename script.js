// Smooth Scrolling
// attach loco scroll css github 
// attach locomotiveScroll js github code
// attach locomotive cdn scroll min js

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//  Mouse Circle Animate
var timeout;
function circleAnimate() {
    var scaleX=1;
    var scaleY=1;
    var prevX=0;
    var prevY=
    
    window.addEventListener('mousemove',function (dets) {
       clearTimeout(timeout)
      var diffX= dets.clientX - prevX;
      var diffY= dets.clientY - prevY;
      prevX=dets.clientX;
      prevY=dets.clientY;
       scaleX=gsap.utils.clamp(.8,1.2,diffX);
       scaleY=gsap.utils.clamp(.8,1.2,diffY);
       minicircle(scaleX,scaleY);
       timeout=setTimeout(() => {
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
       }, 100);
    })
}
circleAnimate()

function minicircle(scaleX,scaleY) {
    window.addEventListener("mousemove", function(det) {
       document.querySelector(".minicircle").style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${scaleX}, ${scaleY})`;
    });
 }

//   Image Elem Div 

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate=0;
    var diffrot=0;
    elem.addEventListener('mousemove',function (dets) {
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX;
      var diff=  dets.clientY - elem.getBoundingClientRect().top
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top:diff,
            left:dets.clientX,
            ease:Power3,
            rotate:gsap.utils.clamp(-20,20,diffrot)
        })
    })
    elem.addEventListener('mouseleave',function () {
       
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:.5,
        })
    })
})



// ----------------Gsap-------------------
 var nav= gsap.timeline()
nav.from(".nav h3",{
    y:-20,
    opacity:0,
    duration:1,
})
.to(".boundingelem ",{
    y:0,
    duration:1,
    stagger:0.3,
   
})
nav.from(".herofooter",{
    y:-20,
    opacity:0,
    duration:0.6,
    // scale:0.2,
})
