import gsap from "gsap";

const cursor = document.getElementById("bubble");

const updateCursor = (e) => {

  gsap.to("#bubble", {
    duration: 1,
    x: e.pageX - cursor.offsetWidth/2+  "px",
    y: e.pageY -cursor.offsetHeight/2+"px",
    ease: "power3.out"
  })

}


const title = document.getElementById("title");
const forest = document.getElementById("forest");
const rocks = document.getElementById("rocks");
const bird1 = document.getElementById("bird1");
const bird2 = document.getElementById("bird2");

const surfer = document.getElementById("surfer");
const shark = document.getElementById("shark");
const anglerfishList = document.getElementsByClassName("anglerfishContainer");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  title.style.top = value * 0.9 + "px";
  rocks.style.top = value * -0.12 + "px";
  forest.style.top = value * 0.25 + "px";



  bird1.style.top = value * -0.1 + "%";
  bird1.style.left = value * 0.1 + "%";

  bird2.style.top = value * -0.05 + "%";
  bird2.style.left = value * -0.15 + "%";

  surfer.style.left = 1920 - value*5  + "px";
  for(let i = 0; i < anglerfishList.length; i++) {
    anglerfishList[i].style.left = 1920 - value * 0.5 + "px";
  }
});

window.addEventListener("mousemove", updateCursor)

