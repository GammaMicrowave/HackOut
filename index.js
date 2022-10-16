// const muscle1 = document.querySelector(".muscle-1");
// const muscle2 = document.querySelector(".muscle-2");
const mscleU = document.getElementsByClassName("flexU");
// const descriptionBox = document.querySelector(".description-box");
// const horizontalLine = document.querySelector(".horizontal-line");
// const slantLine = document.querySelector(".slant-line");
const upperBody = document.querySelector("#upper-body");
let b1 = true;
function trial1() {
  if (b1 == false) {
    for (i = 0; i < mscleU.length; i++) {
      mscleU[i].style.display = "none";
    }
  } else {
    for (i = 0; i < mscleU.length; i++) {
      mscleU[i].style.display = "flex";
    }
  }
  b1 = !b1;
}
let b2=true;
const mscleM = document.getElementsByClassName("flexM");
function trial2() {
  if (b2 == false) {
    for (i = 0; i < mscleM.length; i++) {
      mscleM[i].style.display = "none";
    }
  } else {
    for (i = 0; i < mscleM.length; i++) {
      mscleM[i].style.display = "flex";
    }
  }
  b2 = !b2;
}
let b3=true;
const mscleL = document.getElementsByClassName("flexL");
function trial3() {
  if (b3 == false) {
    for (i = 0; i < mscleL.length; i++) {
      mscleL[i].style.display = "none";
    }
  } else {
    for (i = 0; i < mscleL.length; i++) {
      mscleL[i].style.display = "flex";
    }
  }
  b3 = !b3;
}
let a = document.getElementsByClassName("circle");
let b = true;
function trial() {
  if (b == false) {
    for (i = 0; i < a.length - 1; i++) {
      a[i].style.transform = "scale(0)";
    }
  } else {
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
let elements = document.querySelectorAll(".bgparts");
elements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("bgparts-hover");
    element.firstElementChild.classList.toggle("list");
  });
});

// function hova(bool){

//}
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

// let cols = Math.floor(document.body.clientWidth/50);
// let rows = Math.floor(document.body.clientHeight/50);

// const createTile = index =>{
//     const tile = document.createElement("div");
//     tile.classList.add("tile");
//     return tile;
// }

// const createTiles = quantity => {
//     Array.from(Array(quantity)).map((tile,index)=>{
//         wrapper.appendChild(createTile(index));
//     })
// }

// // createTiles(cols * rows);
// const createGrid = () => {
//     wrapper.innerHTML = "";
//     cols = Math.floor(document.body.clientWidth / 50);
//     rows = Math.floor(document.body.clientHeight / 50);

//     wrapper.style.setProperty("--cols",cols);
//     wrapper.style.setProperty("--rows", rows);
//     createTiles ( cols * rows);
// }
// window.onresize = () => createGrid();
