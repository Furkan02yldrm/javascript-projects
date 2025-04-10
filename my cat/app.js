var pics = [
  "img/kedi1.jpg",
  "img/kedi2.jpg",
  "img/kedi3.jpg",
  "img/kedi4.jpg",
  "img/kedi5.jpg",
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;
btn.addEventListener("click", function () {
  if (counter === 5) {
    counter = 0;
  }
  img.src = pics[counter];
  counter = counter + 1;
});
