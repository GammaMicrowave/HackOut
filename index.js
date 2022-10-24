const mscleU = document.getElementsByClassName("flexU");
const upperBody = document.querySelector("#upper-body");
let b1 = true;
function trial1() {
  if (b1 == false) {
    for (i = 0; i < mscleU.length; i++) {
      // mscleU[i].style.display = "none";
      mscleU[i].style.opacity = 0;
    }
  } else {
    for (i = 0; i < mscleU.length; i++) {
      // mscleU[i].style.display = "flex";
      mscleU[i].style.opacity = 1;
    }
  }
  b1 = !b1;
}
let b2=true;
const mscleM = document.getElementsByClassName("flexM");
function trial2() {
  if (b2 == false) {
    for (i = 0; i < mscleM.length; i++) {
      // mscleM[i].style.display = "none";
      mscleM[i].style.opacity = 0;
    }
  } else {
    for (i = 0; i < mscleM.length; i++) {
      // mscleM[i].style.display = "flex";
      mscleM[i].style.opacity = 1;
    }
  }
  b2 = !b2;
}
let b3=true;
const mscleL = document.getElementsByClassName("flexL");
function trial3() {
  if (b3 == false) {
    for (i = 0; i < mscleL.length; i++) {
      // mscleL[i].style.display = "none";
      mscleL[i].style.opacity = 0;
    }
  } else {
    for (i = 0; i < mscleL.length; i++) {
      // mscleL[i].style.display = "flex";
      mscleL[i].style.opacity = 1;
    }
  }
  b3 = !b3;
}
let a = document.getElementsByClassName("circle");
let b = true;
function trial() {
  if (b == false) {
    a[3].style.transform = "scale(1)";
    for (i = 0; i < a.length - 1; i++) {
      a[i].style.transform = "scale(0)";
    }
  } else {
    a[3].style.transform = "scale(2)";
    for (i = 0; i < a.length - 1; i++) {
      a[i].style.transform = "scale(1)";
    }
  }
  b = !b;
}

// // console.log(body);
// document.addEventListener("mousemove" , (e)=>{

// const anchor = document.getElementById("mid-body");
// const rekt = anchor.getBoundingClientRect();
// const anchorX = rekt.left + rekt.width / 2;
// const anchorY = rekt.top + rekt.height / 2;
// const body = document.querySelectorAll(".hue");
//     const X = e.clientX;
//     const Y = e.clientY;
//     const angleDeg = angle(X, Y , anchorX, anchorY);
//     console.log(angleDeg);
//     body.forEach(body => {
//         // body.style.opacity = "${angleDeg}";
//         anchor.style.setProperty("--angleDeg",angleDeg);
//         // anchor.style.backgroundColor = 'rgb(${angleDeg} , 0 , 0)'

//     })
// })

// function angle(x1,y1,x2,y2){
//     const dy = y2 - y1;
//     const dx = x2 - x1;
//     const a = Math.atan2(dy,dx) * 180 / Math.PI + 180;
//     return a*255/360;

// }
let linker = document.querySelectorAll(".description-box");
linker.forEach((link) =>{
    link.addEventListener("click", ()=>{
        let el = document.getElementById(link.innerHTML);
        el.classList.toggle("bgparts-hover");
        el.firstElementChild.classList.toggle("list");
    });
});
let elements = document.querySelectorAll(".bgparts");
elements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("bgparts-hover");
    element.firstElementChild.classList.toggle("list");
  });
});



const hideElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hideElements.forEach((el) => observer.observe(el));