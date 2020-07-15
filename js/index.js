// Your code goes here

const fun = document.querySelector("h1");
fun.addEventListener("mouseover", (e) => {
  fun.style.color = "orange";
  setTimeout(function () {
    fun.style.color = "black";
  }, 500);
});

const go = document.querySelector(".img-content img");
go.addEventListener("mouseenter", (e) => {
  go.style.border = "5px solid red";
});

go.addEventListener("mouseleave", (e) => {
  go.style.border = "initial";
});

const bus = document.querySelector(".intro img");
bus.addEventListener("dblclick", () => {
  bus.src = "img/Brokebus.jpg";
  bus.style.scale;
});

const buttons = document.querySelector(".btn");

buttons.addEventListener("click", (e) => {
  buttons.style.color = "red";
  buttons.style.backgroundColor = "orange";
});

// const button = document.('.btn')

// buttons.addEventListener('click', (e) => {
//     buttons.style.color = 'red'
//     buttons.style.backgroundColor = 'orange'
// });

const dest = document.querySelector(".content-destination img");

window.addEventListener("resize", (e) => {
  dest.src = "img/tropical-paradise.jpg";
  dest.style.border = "5px solid orange";
});

const back = document.querySelector("body");

window.addEventListener("scroll", (e) => {
  back.style.color = "green";
});

const image = document.querySelector(".rounded");

image.addEventListener("click", (e) => {
  image.src = "img/venice.jpeg";
});

const image2 = document.querySelector(".rounded");

image2.addEventListener("mouseover", (e) => {
  image2.style.border = "5px solid blue";
});

const nav = document.querySelectorAll("a");

nav.forEach((navItem) => {
  navItem.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
  });
});
event.stopPropagation();
