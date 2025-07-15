var total = 50;
var container = document.getElementById("container"),
    w = window.innerWidth,
    h = window.innerHeight;

TweenLite.set("#container", { perspective: 600 });

for (let i = 0; i < total; i++) {
  let flowers = ["🌹", "🌼", "🌸"];
  let emoji = flowers[Math.floor(Math.random() * flowers.length)];
  
  let div = document.createElement("div");
div.className = "flower";
div.innerText = emoji;

TweenLite.set(div, {
  x: R(0, w),
  y: R(-200, -150),
  z: R(-200, 200),
  xPercent: "-50%",
  yPercent: "-50%"
});

container.insertBefore(div, container.firstChild); // ✅ insert before all other elements
animateFlower(div);
}

function animateFlower(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: R(-20, 0)
  });
  TweenMax.to(elm, R(4, 8), {
    x: '+=100',
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  });
  TweenMax.to(elm, R(2, 8), {
    scale: R(0.8, 1.3),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  });
}

function R(min, max) {
  return min + Math.random() * (max - min);
}

//   window.addEventListener("load", function () {
//     setTimeout(function () {
//       document.querySelector(".preloader").style.display = "none";
//       document.body.classList.add("animate");
//       const main = document.getElements("main-content");
   
//       main.style.opacity = 1;
     
//     }, 4500);
//   });
