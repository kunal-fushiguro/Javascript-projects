// this code is incomplete because i don't add value that can change 4 to 7 in every function so that it can add new array on new elements 



const images = document.querySelector(".img");
const images2 = document.querySelector(".img2");
const images3 = document.querySelector(".img3");
const productName = document.querySelector(".product-name1");
const productName2 = document.querySelector(".product-name2");
const productName3 = document.querySelector(".product-name3");
const productPrice = document.querySelector(".product-price1");
const productPrice2 = document.querySelector(".product-price2");
const productPrice3 = document.querySelector(".product-price3");
const button = document.querySelector(".btn");
const container = document.querySelector(".container");

var valueren = 1;

var value = 1;
var limits = 3;
var skip = 0;
var lastValue = 3;
var url = `https://dummyjson.com/products?limit=${limits}&skip=${skip}&select=title,price,images`;

// let data = fetch(url,{method:'GET'});
// data.then((promise)=>{
//     return promise.json();
// }).then((returndata)=>{
//     console.log(returndata.products);
//     renderElements(returndata.products);
// }).catch((e)=>{
//     console.log(e);
// });
if(value == 1){
    let data = fetch(url, { method: "GET" });
    data
        .then((promise) => {
            return promise.json();
        })
        .then((returndata) => {
            console.log(returndata.products);
        renderElements(returndata.products);
        })
        .catch((e) => {
            console.log(e);
        });
}



button.addEventListener("click", () => {
    creatingElemets();

    if(value > 1 ){
    fetchingData();
    }
});


function fetchingData() {
  if (value > 1) {
    skip = lastValue;
    lastValue = lastValue + 3;
    // console.log(skip);
    // console.log(lastValue);
    url = `https://dummyjson.com/products?limit=${limits}&skip=${skip}&select=title,price,images`;
    let data = fetch(url, { method: "GET" });
    data
    .then((promise) => {
        return promise.json();
    })
    .then((returndata) => {
        console.log(returndata.products);
        newrenderElements(returndata.products,valueren);
    })
    .catch((e) => {
        console.log(e);
    });
}
}

function creatingElemets(valueren) {
    let value1 = 4; 
    let value2 = 5;
    let value3 = 6;
    let newContainer = document.createElement("div");
    newContainer.className = "contain";
    
    let newProductitems = document.createElement("div");
    let newProductitems2 = document.createElement("div");
    let newProductitems3 = document.createElement("div");
    newProductitems.className = "product-items";
    newProductitems2.className = "product-items";
    newProductitems3.className = "product-items";
    
    let newimg = document.createElement("img");
    let newimg2 = document.createElement("img");
    let newimg3 = document.createElement("img");
    newimg.className = `img${value1}`;
    newimg2.className = `img${value2}`;
    newimg3.className = `img${value3}`;
    
    let newproductinfo = document.createElement("div");
    let newproductinfo2 = document.createElement("div");
    let newproductinfo3 = document.createElement("div");
    newproductinfo.className = "product-info";
    newproductinfo2.className = "product-info";
    newproductinfo3.className = "product-info";
    
    let newspanname = document.createElement("span");
    let newspanprice = document.createElement("span");
    newspanname.classList.add(`product-name${value1}`,"product-name");
    // newspanprice.className = `product-price${value1}`;
    newspanprice.classList.add(`product-price${value1}`,"product-price");
    let newspanname2 = document.createElement("span");
    let newspanprice2 = document.createElement("span");
    newspanname2.classList.add(`product-name${value2}`,"product-name");
    // newspanprice2.className = `product-price${value2}`;
    newspanprice2.classList.add(`product-price${value3}`,"product-price");
    let newspanname3 = document.createElement("span");
    let newspanprice3 = document.createElement("span");
    newspanname3.classList.add(`product-name${value3}`,"product-name");
    newspanprice3.classList.add(`product-price${value3}`,"product-price");
    
    container.appendChild(newContainer);
    newContainer.appendChild(newProductitems);
    newContainer.appendChild(newProductitems2);
    newContainer.appendChild(newProductitems3);
    newProductitems.appendChild(newimg);
    newProductitems.appendChild(newproductinfo);
    newProductitems2.appendChild(newimg2);
    newProductitems2.appendChild(newproductinfo2);
    newProductitems3.appendChild(newimg3);
    newProductitems3.appendChild(newproductinfo3);
    newproductinfo.appendChild(newspanname);
    newproductinfo.appendChild(newspanprice);
    newproductinfo2.appendChild(newspanname2);
    newproductinfo2.appendChild(newspanprice2);
    newproductinfo3.appendChild(newspanname3);
    newproductinfo3.appendChild(newspanprice3);
}

function renderElements(obj) {
    if(value == 1){
        images.src = obj[0].images[0];
        productName.textContent = obj[0].title;
        productPrice.textContent = obj[0].price;
        images2.src = obj[1].images[0];
        productName2.textContent = obj[1].title;
        productPrice2.textContent = obj[1].price;
        images3.src = obj[2].images[0];
        productName3.textContent = obj[2].title;
        productPrice3.textContent = obj[2].price;
        value = 2;    
    }
}
function newrenderElements(obj,valueren){
    let value1 = 4;
    let value2 = 5;
    let value3 = 6;
    const newimgtag = document.querySelector(`.img${value1}`);
    newimgtag.src = obj[0].images[0]; 
    const newimgtag2 = document.querySelector(`.img${value2}`);
    newimgtag2.src = obj[1].images[0]; 
    const newimgtag3 = document.querySelector(`.img${value3}`);
    newimgtag3.src = obj[2].images[0]; 
    const newproductname = document.querySelector(`.product-name${value1}`);
    newproductname.textContent = obj[0].title;
    const newproductname2 = document.querySelector(`.product-name${value2}`);
    newproductname2.textContent = obj[1].title;
    const newproductname3 = document.querySelector(`.product-name${value3}`);
    newproductname3.textContent = obj[2].title;
    const newproductprice = document.querySelector(`.product-price${value1}`);
    newproductprice.textContent = obj[0].price;
    const newproductprice2 = document.querySelector(`.product-price${value2}`);
    newproductprice2.textContent = obj[1].price;
    const newproductprice3 = document.querySelector(`.product-price${value3}`);
    newproductprice3.textContent = obj[2].price;
}