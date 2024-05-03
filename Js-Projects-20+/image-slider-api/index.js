const imgbox = document.querySelector(".slider");

const img = document.querySelector("img");
const leftbtn = document.querySelector(".left");
const rightbtn = document.querySelector(".right");

const url = "https://picsum.photos/v2/list?page=2&limit=";
const limits = "7";
const imgfetch = fetch(url.concat(limits));
imgfetch.then((imgreponse)=>{
    return imgreponse.json();
}).then((img)=>{
    const data = img;
    // console.log(data[0].download_url);
    imgslider(data);
}).catch((e)=>{
    console.log(e);
});
function  imgslider(images){
//     images.map((img)=> console.log(img));
//     imgbox.innerHTML = images.map((img)=> `
//        <div class="imgholder">
//             <img src="${img.download_url}" style="width:900px;">
//        </div>
//     `)
    console.log(images);
    // imgbox.innerHTML = `<div class="imgholder">
    //             <img src="${images[dataid].download_url}" style="width:900px;">` 
    var dataid = 0;
    console.log(img);
    img.src=images[dataid].download_url;
    rightbtn.addEventListener("click",()=>{
        if(dataid > images[limits-1]){
            img.src=images[dataid].download_url;  
            console.log(dataid);          
        }else{
            img.src=images[dataid++].download_url;
        }
    })   
    leftbtn.addEventListener("click",()=>{
        if(dataid < 0){
            img.src=images[dataid].download_url;  
            console.log(dataid);          
        }else{
            img.src=images[dataid--].download_url;
        }
    })   
}