import content from "./content.js";
const data = content;
// console.log(data);

const Men = document.querySelector("#Men");
const Women = document.querySelector("#women");
const Kids = document.querySelector("#kids");
const All = document.querySelector("#All");
const Container = document.querySelector(".container");
// const Container = document.querySelector(".container");

All.addEventListener("click", () => {
  data.forEach((item, index) => {
    const existingdiv = document.querySelector(`.${item.id}${index}`);
    if (existingdiv) {
      Container.removeChild(existingdiv);
      //    console.log("hii");
    }
  });
  data.forEach((item, index) => {
    // console.log(item.id, index);
    const newdiv = document.createElement("div");
    newdiv.className = `${item.id}${index}`;
    Container.appendChild(newdiv);
    newdiv.innerText = item.label;
  });
});
Men.addEventListener("click", () => {
  data.forEach((item, index) => {
    const existingdiv = document.querySelector(`.${item.id}${index}`);
    if (existingdiv) {
      Container.removeChild(existingdiv);
      //    console.log("hii");
    }
  });
  data.forEach((item, index) => {
    if (item.id == "Men") {
      //   console.log(item);
      const newdiv = document.createElement("div");
      newdiv.className = `${item.id}${index}`;
      Container.appendChild(newdiv);
      newdiv.innerText = item.label;
    }
  });
});
Women.addEventListener("click", () => {
  data.forEach((item, index) => {
    const existingdiv = document.querySelector(`.${item.id}${index}`);
    if (existingdiv) {
      Container.removeChild(existingdiv);
      //    console.log("hii");
    }
  });
  data.forEach((item, index) => {
    if (item.id == "Women") {
      //   console.log(item);
      const newdiv = document.createElement("div");
      newdiv.className = `${item.id}${index}`;
      Container.appendChild(newdiv);
      newdiv.innerText = item.label;
    }
  });
});
Kids.addEventListener("click", () => {
  data.forEach((item, index) => {
    const existingdiv = document.querySelector(`.${item.id}${index}`);
    if (existingdiv) {
      Container.removeChild(existingdiv);
      //    console.log("hii");
    }
  });
  data.forEach((item, index) => {
    if (item.id == "Kids") {
      //   console.log(item);
      const newdiv = document.createElement("div");
      newdiv.className = `${item.id}${index}`;
      Container.appendChild(newdiv);
      newdiv.innerText = item.label;
    }
  });
});
