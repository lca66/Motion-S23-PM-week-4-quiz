import { gsap } from "gsap";

//QUIZ

// let mainTl = gsap.timeline({delay:1});

// function .redAni(){

//     let tl = gsap.timeline({delay:1});
//     let mm = gsap.matchMedia();

//     mm.add("(max-width:767px)", () =>{
//     tl.to(".blue-box", {duration:0.5, scale:0.5, ease:"bounce.out"})
//     .to(".blue-box", {duration:0.5, rotation:180})
//     ;
//     });

//     mm.add("(min-width:768px)", () =>{
//         tl.to(".blue-box", {duration:0.5, scale:1.5, ease:"bounce.out"})
//         .to(".blue-box", {duration:0.5, rotation:360, backgroundColor:"yellow"})
//         ;
//         });

//     }


// gsap.to(".red", {});

// gsap.to(".red", {duration:1, x:0, ease:"power4.out"});
// gsap.to(".blue", {duration:1, y:0, ease:"power4.out"});



// let mainTl = gsap.timeline({delay:1});

// function .redAni(){

    let tl = gsap.timeline({delay:1});

    // position 

    tl.from(".red", {duration:1, x:0, ease:"power4.out"})
    .from(".blue", {duration:1, x:350, ease:"power4.out"})
    .to(".red", {duration:1, y:0, ease:"power4.out"})
    .to(".blue", {duration:1, y:300, ease:"power4.out"})
    ;









// gsap.from(".red", {duration:1, x:0, ease:"power4.out"});
// // .fromTo
// gsap.fromTo(".red",{duration:1, x:350, ease:"power4.out"});

// // gsap.from(".red", {duration:2, y:150, ease:"power4.out"});
// gsap.fromTo(".red",{duration:2, y:0, ease:"power4.out"});

// // gsap.fromTo(".red", { x: },{duration:1, x:600, delay:1});

// gsap.from(".blue", {duration:1, x:0, ease:"power4.out"});
// gsap.fromTo(".blue",{duration:1, x:200, ease:"power4.out"});