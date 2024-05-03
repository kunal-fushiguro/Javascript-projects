const image1 = document.getElementById("img-star1");
const image2 = document.getElementById("img-star2");
const image3 = document.getElementById("img-star3");
const image4 = document.getElementById("img-star4");
const image5 = document.getElementById("img-star5");
const rating = document.getElementById("ratingValue");
let booleanvalue = true;
image1.addEventListener("click", () => {
  // console.log("hello");
  if (booleanvalue === true) {
    let value = 1;
    image1.src = "star.png";
    image2.src = "white-star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = value;
    booleanvalue = false;
  } else {
    image1.src = "white-star.png";
    image2.src = "white-star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = 0;
    booleanvalue = true;
  }
});
image2.addEventListener("click", () => {
  // console.log("hello");
  if (booleanvalue === true) {
    let value = 2;
    image1.src = "star.png";
    image2.src = "star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = value;
    booleanvalue = false;
  } else {
    image1.src = "white-star.png";
    image2.src = "white-star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = 0;
    booleanvalue = true;
  }
});
image3.addEventListener("click", () => {
  // console.log("hello");
  if (booleanvalue === true) {
    let value = 3;
    image1.src = "star.png";
    image2.src = "star.png";
    image3.src = "star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = value;
    booleanvalue = false;
  } else {
    image1.src = "white-star.png";
    image2.src = "white-star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = 0;
    booleanvalue = true;
  }
});
image4.addEventListener("click", () => {
  // console.log("hello");
  if (booleanvalue === true) {
    let value = 4;
    image1.src = "star.png";
    image2.src = "star.png";
    image3.src = "star.png";
    image4.src = "star.png";
    image5.src = "white-star.png";
    rating.innerText = value;
    booleanvalue = false;
  } else {
    image1.src = "white-star.png";
    image2.src = "white-star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = 0;
    booleanvalue = true;
  }
});
image5.addEventListener("click", () => {
  // console.log("hello");
  if (booleanvalue === true) {
    let value = 5;
    image1.src = "star.png";
    image2.src = "star.png";
    image3.src = "star.png";
    image4.src = "star.png";
    image5.src = "star.png";
    rating.innerText = value;
    booleanvalue = false;
  } else {
    image1.src = "white-star.png";
    image2.src = "white-star.png";
    image3.src = "white-star.png";
    image4.src = "white-star.png";
    image5.src = "white-star.png";
    rating.innerText = 0;
    booleanvalue = true;
  }
});
