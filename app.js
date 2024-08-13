// PUT YOUR CODE HERE
let boxes = gsap.timeline({
  repeat: -1,
});

boxes
  .fromTo(".red", { left: -400, top: -400 }, { left: 0, top: 0, duration: 1 }, 0)
  .fromTo(".green", { x: 400, y: -400 }, { x: 0, y: 0, duration: 0.5 }, 1)
  .fromTo(".blue", { x: 400, y: 400 }, { x: 0, y: 0, duration: 0.5 }, 1.5)
  .fromTo(".yellow", { x: -400, y: 400 }, { x: 0, y: 0, duration: 0.5 }, 2)
  .to(".red", { left: "100%", borderRadius: "50%", duration: 1, backgroundColor: "green", }, 2.5)
  .to(".red", { x: -200 }, 2.5)
  .to(".green", { top: "100%", borderRadius: "50%", duration: 1, backgroundColor: "blue", }, 2.5)
  .to(".green", { y: -200 }, 2.5)
  .to(".green",{ bottom: 0, borderRadius: "50%", duration: 1, backgroundColor: "blue" }, 2.5)
  .to(".blue", { left: 0, borderRadius: "50%", duration: 1, backgroundColor: "yellow" }, 2.5)
  .to(".yellow", { top: 0, borderRadius: "50%", duration: 1, backgroundColor: "red" }, 2.5)
  .to(".red", { x: 200, duration: 1 }, 3.5)
  .to(".green", { x: 200, duration: 1 }, 3.5)
  .to(".blue", { x: -200, duration: 1 }, 3.5)
  .to(".yellow", { x: -200, duration: 1 }, 3.5);

boxes.play();
