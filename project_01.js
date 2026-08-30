// smooth scrolling
// gsap
//scrolltrigger
function firstpageAnim() {
 var t1 = gsap.timeline();
 t1.from("#nav", {
    y: `-10` ,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut
 })
 .to(".boundinglem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 1,
    stagger: .2
 })
 .from("#homefooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    stagger: .1,
    ease: Expo.easeInOut,
 })
}
var timeout;
// jab hum mouse moove kare to vo mpuse thoda bend ho jate
function mousebend(){
   // default vaue of 
   var xscale = 1;
   var yscale = 1;
   var xpre = 0;
   var ypre = 0;
   window.addEventListener("mousemove", function(det){
      clearTimeout(timeout);
   var xdiff = det.clientX - xpre;
   var ydiff = det.clientY - ypre;
   xpre = det.clientX;
   ypre = det.clientY;
   xscale =  gsap.utils.clamp(.8,1.2,xdiff);
   yscale = gsap.utils.clamp(.8,1.2,ydiff);
   circleMouseFollwer(xscale,yscale);
   timeout = setTimeout(function(){
      document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)` ;
   }, 100);
  });
}
 mousebend();
function circleMouseFollwer(xscale,yscale){
    window.addEventListener("mousemove", function(details){
     document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})` ;
    })
}
circleMouseFollwer();
firstpageAnim();







//teeno element ko select kro fir mousemove lagao,jab mouse move ho to yah pata kro ki mouse kis osition pe hai
//iska mtlb mouse ki x and y position pta kro ki mouse kaha pr hai ,ab mouse ki x y position me us image ko show kro
// move karte waqt rotate kro nad jaise mouse speed ho to vaise hi img rotate change ho
document.querySelector(".elem").forEach(function (elem){
 elem.addEventListener("mousemove",function(details){
 gsap.to(elem.querySelector("img"), {
  opacity: 0,
  ease: power1,
 });
 });
});