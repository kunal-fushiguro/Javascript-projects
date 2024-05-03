const Input = document.querySelector("#input");
const QrDiv = document.querySelector(".QR");
const CreateQr = document.querySelector("#CreateQr");
CreateQr.addEventListener('click',()=>{
    new QRCode(QrDiv, {
        text: Input.value,
        height: 400,
        width: 400,
        colorLight: "#fff",
        colorDark: "#000",
    });
});
// clear() function is not working that i do reload here
function deleteQr(){
    window.location.reload();
}