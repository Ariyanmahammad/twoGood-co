const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function videoconAnimation(){
    var videocon = document.querySelector(".videocontainer")
var playbtn = document.querySelector(".play")

videocon.addEventListener("mouseenter",function(){
    // playbtn.style.opacity=1
    // playbtn.style.scale=1  or gsap se vi kar sakte ho
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })
})
videocon.addEventListener("mouseleave",function(){
    // playbtn.style.opacity=1
    // playbtn.style.scale=1  or gsap se vi kar sakte ho
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })
})

videocon.addEventListener("mousemove",function(dets){
       gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-70
       })

})
}
videoconAnimation()
function loadingAnimation(){
gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:0.5 ,
    duration:0.8,
    stagger:0.3
})
gsap.from(".page1 .videocontainer",{
   scale:0.9,
    opacity:0,
    delay:1.3 ,
    duration:0.3,
})
}
loadingAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y
    })

})
// document.querySelector(".child").addEventListener
// ("mouseenter",function(){
//     gsap.to(".cursor",{
//         transform: 'translate(-50%,-50%) scale(1)'
//     })
// })
// document.querySelector(".child").addEventListener
// ("mouseleave",function(){
//     gsap.to(".cursor",{
//         transform: 'translate(-50%,-50%) scale(0)'
//     })
// })
//  document.querySelectorAll(".child").forEach(function(elem){
//     gsap.to(".cursor",{
//         transform: 'translate(-50%,-50%) scale(1)'
        
//     }) })
    

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
                   transform: 'translate(-50%,-50%) scale(1)'
                });
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
                   transform: 'translate(-50%,-50%) scale(0)'
                });
    });
   

        
    });
    
