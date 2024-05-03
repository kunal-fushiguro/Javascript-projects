var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
const settings = {
    "async" : true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    // console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});
